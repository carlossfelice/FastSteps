import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "./Product";
import Footer from "./Footer";
import MiniBannerCarousel from "./MiniBannerCarousel";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === Number(productId));

  const [selectedImage, setSelectedImage] = useState<string>(
    product?.images?.[0] || product?.imageUrl || ""
  );

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size);
  };

  interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    images: string[];
    imageUrl: string;
    sizes: number[];
    shippingInfo: string;
    paymentMethods: string;
  }

  const addToCart = (product: Product, size: number | null) => {
    if (size) {
      console.log(`Added ${product.name} of size ${size} to cart.`);
    } else {
      console.log("Please select a size.");
    }
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <p className="mt-4">
          Sorry, the product you are looking for is not avaiable.
        </p>
        <Link
          to="/Home"
          className="mt-6 inline-block bg-black text-white py-2 px-4 rounded-full"
        >
          return to the store
        </Link>
      </div>
    );
  }

  return (
    <div>
      <MiniBannerCarousel />
      <div className="flex max-w-7xl mx-auto px-4 py-10">
        <div className="w-1/2">
          {product && (
            <img
              src={selectedImage}
              alt={product ? product.name : ""}
              className="w-full h-100 object-cover rounded-lg"
            />
          )}
          <div className="flex mt-4 space-x-2">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover cursor-pointer ${
                  selectedImage === img ? "border-2 border-black" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-1/2 pl-10">
          {product && (
            <h2 className="text-3xl font-semibold">{product.name}</h2>
          )}
          {product && <p className="text-gray-600 mt-4">{product.price}</p>}

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Product description</h4>
            <p className="text-gray-600">{product?.description}</p>
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Select size</h4>
              <div className="grid grid-cols-4 gap-2">
                {product?.sizes?.map((size: number) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`p-2 border ${
                      selectedSize === size
                        ? "border-black bg-gray-200"
                        : "border-gray-300"
                    } rounded-lg`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            className="mt-6 bg-black text-white py-3 px-6 rounded-full"
            onClick={() => addToCart(product, selectedSize)}
            disabled={!selectedSize}
          >
            {selectedSize ? "Add to Cart" : "Select a Size"}
          </button>

          <div className="mt-6">
            <h4
              className="text-lg font-semibold mb-2 cursor-pointer flex items-center"
              onClick={() => setIsShippingOpen(!isShippingOpen)}
            >
              Returns and shipping {isShippingOpen ? "−" : "+"}
            </h4>
            {isShippingOpen && (
              <p className="text-gray-600">{product?.shippingInfo}</p>
            )}
          </div>

          <div className="mt-6">
            <h4
              className="text-lg font-semibold mb-2 cursor-pointer"
              onClick={() => setIsPaymentOpen(!isPaymentOpen)}
            >
              Payment method {isPaymentOpen ? "−" : "+"}
            </h4>
            {isPaymentOpen && (
              <p className="text-gray-600">{product?.paymentMethods}</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
