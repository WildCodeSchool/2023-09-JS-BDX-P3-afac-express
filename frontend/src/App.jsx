import "./App.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.scss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
