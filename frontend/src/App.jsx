import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./pages/Style/Footer.scss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Footer />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
