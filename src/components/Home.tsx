// Home.tsx
import React from "react";
import CoverParticules from "../utils/cover-particles";
import BestSeller from "./BestSeller";
import Categories from "./Categories";
import Featured from "./Featured";
import Footer from "./Footer";

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="fixed">
        <CoverParticules />
      </div>

      <section
        id="hero"
        className="relative bg-cover bg-center h-[90vh]"
        style={{
          backgroundImage:
            "url('https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/1017193-0001V1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <div className="relative z-10 text-center max-w-2xl px-4">
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Just dropped: new arrivals from Nike and Jordan
            </h1>
            <p className="text-white text-lg sm:text-xl mb-6">
              The latest styles from the game's biggest stars.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <section
        id="best-sellers"
        className={darkMode ? "bg-gray-800" : "bg-white"}
      >
        <h2 className="sr-only">Best Sellers</h2>
        <BestSeller darkMode={darkMode} />
      </section>

      <section
        id="categories"
        className={darkMode ? "bg-gray-800" : "bg-white"}
      >
        <h2 className="sr-only">Categories</h2>
        <Categories darkMode={darkMode} />
      </section>

      <section id="featured" className={darkMode ? "bg-gray-800" : "bg-white"}>
        <h2 className="sr-only">Featured</h2>
        <Featured darkMode={darkMode} />
      </section>

      <footer id="footer">
        <h2 className="sr-only">Footer</h2>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
