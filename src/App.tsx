import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <BestSeller />
      <Categories />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
