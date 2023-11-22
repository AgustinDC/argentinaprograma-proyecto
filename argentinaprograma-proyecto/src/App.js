import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div id="contenedor">
      <Navbar/>
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;
