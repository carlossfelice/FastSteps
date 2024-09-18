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
import NotFound from "./components/NotFound";
import Favorites from "./components/Favorites";
import { Provider } from 'react-redux'; // Importa el Provider de Redux
import { store } from './components/store'; // Importa tu store de Redux
import Login from "./components/Login";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Provider store={store}> {/* Envuelve tu app con Provider de Redux */}
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/women" element={<WomenCatalog />} />
          <Route path="/men" element={<MenCatalog />} />
          <Route path="/children" element={<KidsCatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
