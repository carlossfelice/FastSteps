// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WomenCatalog from "./components/WomenCatalog";
import MenCatalog from "./components/MenCatalog";
import KidsCatalog from "./components/KidsCatalog";
import About from "./components/About";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Favorites from "./components/Favorites";
import { Provider } from "react-redux";
import { store } from "./components/store";
import Login from "./components/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BankPromotionsModal from "./components/BankPromotionsModal";
import WomenFiftyOff from "./components/WomenFiftyOff";
import WomenFreeShipping from "./components/WomenFreeShipping";
import WomenTwentyOff from "./components/WomenTwentyOff";
import WomenThirtyOff from "./components/WomenThirtyOff";
import WomenFortyOff from "./components/WomenFortyOff";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import { CartProvider } from "./components/CartContext";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footwear from "./components/Footwear/Footwear";
import Clothing from "./components/Clothing/Clothing";
import Accessories from "./components/Accessories/Accessories";
import Casual from "./components/Casual/Casual";
import Formal from "./components/Formal/Formal";
import Cotton from "./components/Cotton/Cotton";
import Polyester from "./components/Polyester/Polyester";
import Men20Off from "./components/Men20Off/Men20Off";
import Men30Off from "./components/Men20Off/Men30Off";
import Men40Off from "./components/Men20Off/Men40Off";
import Men50Off from "./components/Men20Off/Men50Off";
import MenFootwear from "./components/Men/MenFootwear";
import MenClothing from "./components/Men/MenClothing";
import MenAccessories from "./components/MenAccessories";
import MenCasual from "./components/MenCasual";
import MenFormal from "./components/MenFormal";
import MenCotton from "./components/MenCotton";
import MenPolyester from "./components/MenPolyester";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "false";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <div
            className={
              darkMode
                ? "bg-[#1E1E2F] text-[#E0E0E0]"
                : "bg-[#F0F4F8] text-[#333333]"
            }
          >
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />

              <Route path="/women" element={<WomenCatalog />} />
              <Route
                path="/women/product/:productId"
                element={<ProductDetail section="women" />}
              />

              <Route path="/men" element={<MenCatalog />} />
              <Route
                path="/men/product/:productId"
                element={<ProductDetail section="men" />}
              />

              <Route path="/children" element={<KidsCatalog />} />
              <Route
                path="/children/product/:productId"
                element={<ProductDetail section="children" />}
              />

              <Route path="about" element={<About />} />
              <Route path="about/our-team" element={<OurTeam />} />
              <Route path="about/contact" element={<Contact />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />

              <Route
                path="/women/shop-women/20-off"
                element={<WomenTwentyOff />}
              />
              <Route
                path="/women/shop-women/30-off"
                element={<WomenThirtyOff />}
              />
              <Route
                path="/women/shop-women/40-off"
                element={<WomenFortyOff />}
              />
              <Route
                path="/women/shop-women/50-off"
                element={<WomenFiftyOff />}
              />
              <Route
                path="/women/bank-promotions"
                element={<BankPromotionsModal />}
              />
              <Route
                path="/women/shop-women/free-shipping"
                element={<WomenFreeShipping />}
              />

              <Route path="*" element={<NotFound />} />
              <Route path="/women/footwear" element={<Footwear />} />
              <Route path="/women/clothing" element={<Clothing />} />
              <Route path="/women/accessories" element={<Accessories />} />
              <Route path="/women/casual" element={<Casual />} />
              <Route path="/women/formal" element={<Formal />} />
              <Route path="/women/cotton" element={<Cotton />} />
              <Route path="/women/polyester" element={<Polyester />} />
              <Route path="/men/shop-men/20-off" element={<Men20Off />} />
              <Route path="/men/shop-men/30-off" element={<Men30Off />} />
              <Route path="/men/shop-men/40-off" element={<Men40Off />} />
              <Route path="/men/shop-men/50-off" element={<Men50Off />} />
              <Route path="/men/footwear" element={<MenFootwear />} />
              <Route path="/men/clothing" element={<MenClothing />} />
              <Route path="/men/accessories" element={<MenAccessories />} />
              <Route path="/men/casual" element={<MenCasual />} />
              <Route path="/men/formal" element={<MenFormal />} />
              <Route path="/men/cotton" element={<MenCotton />} />
              <Route path="/men/polyester" element={<MenPolyester />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </Provider>
  );
}

export default App;
