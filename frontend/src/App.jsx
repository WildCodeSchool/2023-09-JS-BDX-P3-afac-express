import "./App.css";
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
