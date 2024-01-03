import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const RecoveryContext = createContext();

function OTPInput() {
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:5000/send_recovery_email", {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => setDisable(true))
      // eslint-disable-next-line no-alert
      .then(() => alert("A new OTP has successfully been sent to your email."))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verifyOTP() {
    if (parseInt(OTPinput.join(""), 10) === otp) {
      setPage("reset");
      return;
    }
    // eslint-disable-next-line no-alert
    alert(
      "The code you have entered is not correct, try again or re-send the link"
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        // eslint-disable-next-line no-unused-expressions
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); // each count lasts for a second
    // cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-4 shadow mx-auto w-100 max-w-lg rounded-2xl">
        <div className="text-center mb-4">
          <div className="font-weight-bold text-3xl">Email Verification</div>
          <div className="text-sm font-medium text-gray-400">
            We have sent a code to your email {email}
          </div>
        </div>

        <form>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex gap-2">
              {Array.from({ length: 4 }, (_, index) => (
                <input
                  key={index}
                  maxLength="1"
                  className="form-control flex-grow-1 text-center"
                  type="text"
                  onChange={(e) =>
                    setOTPinput([
                      ...OTPinput.slice(0, index),
                      e.target.value,
                      ...OTPinput.slice(index + 1),
                    ])
                  }
                />
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={() => verifyOTP()}
                className="btn btn-primary w-100"
              >
                Verify Account
              </button>
            </div>
            <div className="d-flex justify-content-center text-sm font-medium text-gray-500">
              <p>Didn't receive code? </p>
              <button
                type="button"
                className={`d-flex align-items-center text-${
                  disable ? "secondary" : "primary"
                } ${disable ? "disabled" : ""}`}
                style={{
                  textDecoration: disable ? "none" : "underline",
                  cursor: disable ? "not-allowed" : "pointer",
                }}
                onClick={() => resendOTP()}
              >
                {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OTPInput;
