import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WomenCatalog from "./components/WomenCatalog";
import MenCatalog from "./components/MenCatalog";
import KidsCatalog from "./components/KidsCatalog";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/women" element={<WomenCatalog />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/Men" element={<MenCatalog />} />
          <Route path="/children" element={<KidsCatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
