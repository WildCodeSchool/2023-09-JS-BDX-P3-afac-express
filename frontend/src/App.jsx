import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Outlet />
      <Navigation />
    </div>
  );
}

export default App;
