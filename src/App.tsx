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

import { initMercadoPago } from "@mercadopago/sdk-react";
import { CartProvider } from "./components/CartContext";

initMercadoPago("APP_USR-ffed56d9-b519-4ac2-abb4-858eb52841f8");

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
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

            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bank-promotions" element={<BankPromotionsModal />} />
            <Route path="/shop-women/50-off" element={<WomenFiftyOff />} />
            <Route
              path="/shop-women/free-shipping"
              element={<WomenFreeShipping />}
            />
            <Route path="/shop-mujer/20-off" element={<WomenTwentyOff />} />
            <Route path="/shop-mujer/30-off" element={<WomenThirtyOff />} />
            <Route path="/shop-mujer/40-off" element={<WomenFortyOff />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </Provider>
  );
}

export default App;
