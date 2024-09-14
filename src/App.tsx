import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WomenCatalog from "./components/WomenCatalog"; // Asegúrate de tener este componente
import MenCatalog from "./components/MenCatalog"; // Asegúrate de tener este componente
import KidsCatalog from "./components/KidsCatalog"; // Asegúrate de tener este componente
import About from "./components/About"; // Asegúrate de tener este componente        // Navbar con el logo
import { Navbar } from "./components/Navbar";
// import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/women" element={<WomenCatalog />} />
          <Route path="/Men" element={<MenCatalog />} />
          <Route path="/children" element={<KidsCatalog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
