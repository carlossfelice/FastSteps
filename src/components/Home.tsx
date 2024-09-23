import BestSeller from "./BestSeller";
import Categories from "./Categories";
import Featured from "./Featured";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 text-center min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-cover bg-center h-[85vh]"
        style={{
          backgroundImage:
            "url('https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/1017193-0001V1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <div className="relative z-10 text-center max-w-2xl px-4">
            <h1 className="text-white text-5xl font-extrabold mb-4 leading-tight">
              Just dropped: new arrivals from Nike and Jordan
            </h1>
            <p className="text-white text-lg mb-6">
              The latest styles from the game's biggest stars.
            </p>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section id="best-sellers">
        <h2 className="sr-only">Best Sellers</h2>
        <BestSeller />
      </section>

      {/* Categories Section */}
      <section id="categories">
        <h2 className="sr-only">Categories</h2>
        <Categories />
      </section>

      {/* Featured Section */}
      <section id="featured">
        <h2 className="sr-only">Featured</h2>
        <Featured />
      </section>

      {/* Footer Section */}
      <footer id="footer">
        <h2 className="sr-only">Footer</h2>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
