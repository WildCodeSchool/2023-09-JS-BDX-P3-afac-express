import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
