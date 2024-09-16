import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./Product";
import Footer from "./Footer";
import MiniBannerCarousel from "./MiniBannerCarousel";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId || "0"));

  const [selectedImage, setSelectedImage] = useState(
    product?.images ? product.images[0] : product?.imageUrl || ""
  );

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <div>Product not found</div>;
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

            <img
              src={product ? product.imageUrl : ""}
              alt={product ? product.name : ""}
              onClick={() => product && setSelectedImage(product.imageUrl)}
              className="w-20 h-20 object-cover cursor-pointer"
            />
          </div>
        </div>

        <div className="w-1/2 pl-10">
          {product && (
            <h2 className="text-3xl font-semibold">{product.name}</h2>
          )}
          {product && <p className="text-gray-600 mt-4">{product.price}</p>}

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Seleccionar Talla</h4>
            <div className="grid grid-cols-4 gap-2">
              {[6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`p-2 border ${
                    selectedSize === size ? "border-black" : "border-gray-300"
                  } rounded-lg`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 bg-black text-white py-3 px-6 rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
