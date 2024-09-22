import { useState } from "react";
import { Link } from "react-router-dom";
import MiniBannerCarousel from "./MiniBannerCarousel";
import { womenProducts } from "./Product";
import Footer from "./Footer";

const currentProducts = womenProducts;

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  options: string[];
}

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  options: string[];
  onFilterChange: (option: string) => void;
}

const FilterSection = ({
  title,
  isOpen,
  toggleOpen,
  options,
  onFilterChange,
}: FilterSectionProps) => {
  return (
    <div className="mb-6">
      <div
        className="font-semibold mb-2 cursor-pointer flex justify-between items-center"
        onClick={toggleOpen}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <ul className="space-y-3">
          {options.map((option, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => onFilterChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const WomenCatalog = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isSurfaceOpen, setIsSurfaceOpen] = useState(false);

  return (
    <div>
      <MiniBannerCarousel />

      <div className="flex max-w-7xl mx-auto px-4 py-10">
        <div className="w-1/4 pr-6">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Opportunities</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/shop-mujer/20-off"
                  className="text-gray-600 hover:underline"
                >
                  20% OFF
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/30-off"
                  className="text-gray-600 hover:underline"
                >
                  30% OFF
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/40-off"
                  className="text-gray-600 hover:underline"
                >
                  40% OFF
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/50-off"
                  className="text-gray-600 hover:underline"
                >
                  50% OFF
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Talle</h4>
            <ul className="grid grid-cols-3 gap-2">
              <li>
                <a
                  href="/shop-mujer/talle/4"
                  className="text-gray-600 hover:underline"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/5"
                  className="text-gray-600 hover:underline"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/6"
                  className="text-gray-600 hover:underline"
                >
                  6
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/7"
                  className="text-gray-600 hover:underline"
                >
                  7
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/8"
                  className="text-gray-600 hover:underline"
                >
                  8
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/9"
                  className="text-gray-600 hover:underline"
                >
                  9
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/10"
                  className="text-gray-600 hover:underline"
                >
                  10
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/11"
                  className="text-gray-600 hover:underline"
                >
                  11
                </a>
              </li>
              <li>
                <a
                  href="/shop-mujer/talle/12"
                  className="text-gray-600 hover:underline"
                >
                  12
                </a>
              </li>
            </ul>
          </div>

          <FilterSection
            title="Categorías"
            isOpen={isCategoryOpen}
            toggleOpen={() => setIsCategoryOpen(!isCategoryOpen)}
            options={["Footwear", "Clothing", "Accessories"]}
            onFilterChange={(option) => console.log(option)}
          />

          <FilterSection
            title="Type of Products"
            isOpen={isProductTypeOpen}
            toggleOpen={() => setIsProductTypeOpen(!isProductTypeOpen)}
            options={["Boots", "Sweatshirts", "Leggings", "T-Shirts"]}
            onFilterChange={(option) => console.log(option)}
          />

          <FilterSection
            title="Surface"
            isOpen={isSurfaceOpen}
            toggleOpen={() => setIsSurfaceOpen(!isSurfaceOpen)}
            options={[
              "indoor court",
              "natural grass",
              "synthetic grass",
              "Path",
            ]}
            onFilterChange={(option) => console.log(option)}
          />
        </div>

        <div className="w-3/4">
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <div className="grid grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    {product.new && (
                      <span className="text-green-600 font-semibold">
                        The new thing
                      </span>
                    )}
                    <h4 className="text-lg font-semibold">{product.name}</h4>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WomenCatalog;
