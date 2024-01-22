import { MDBContainer } from "mdb-react-ui-kit";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.scss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <MDBContainer className="d-flex">
        <Outlet />
      </MDBContainer>
      <Footer />
    </>
  );
}

export default App;
