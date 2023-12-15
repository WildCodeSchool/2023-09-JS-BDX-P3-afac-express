import { MDBContainer } from "mdb-react-ui-kit";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./style/Footer.scss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <MDBContainer className="d-flex flex-column">
        <Outlet />
      </MDBContainer>
      <Footer />
    </>
  );
}

export default App;
