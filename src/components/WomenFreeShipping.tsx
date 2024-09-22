import { Link } from "react-router-dom";
import { womenProducts } from "./Product";
import Footer from "./Footer";

const WomenFreeShipping = () => {
  const freeShippingProducts = womenProducts.filter((product) =>
    product.shippingInfo.includes("Free Shipping")
  );

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center my-8 text-rose-600 animate-pulse drop-shadow-lg">
        Free Shipping on Orders over 250
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 py-10">
        {freeShippingProducts.map((product) => (
          <Link to={`/women/product/${product.id}`} key={product.id}>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4">
                {product.new && (
                  <span className="text-green-600 font-semibold">New!</span>
                )}
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default WomenFreeShipping;
