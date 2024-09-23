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

import { initMercadoPago } from '@mercadopago/sdk-react';
import { CartProvider } from "./components/CartContext"; // Importa el CartProvider

initMercadoPago("APP_USR-ffed56d9-b519-4ac2-abb4-858eb52841f8");

const routes = [
  { path: "/", element: <Home /> },
  { path: "/women", element: <WomenCatalog /> },
  { path: "/women/product/:productId", element: <ProductDetail section="women" /> },
  { path: "/men", element: <MenCatalog /> },
  { path: "/men/product/:productId", element: <ProductDetail section="men" /> },
  { path: "/children", element: <KidsCatalog /> },
  { path: "/children/product/:productId", element: <ProductDetail section="children" /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Profile /> },
  { path: "/bank-promotions", element: <BankPromotionsModal /> },
  { path: "/shop-women/50-off", element: <WomenFiftyOff /> },
  { path: "/shop-women/free-shipping", element: <WomenFreeShipping /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <Provider store={store}>
      <CartProvider> {/* Descomenta el CartProvider para envolver la aplicación */}
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </CartProvider> {/* Cierra el CartProvider */}
    </Provider>
  );
}

export default App;
