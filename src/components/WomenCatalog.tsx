import { useState } from "react";
import { Link } from "react-router-dom";
import MiniBannerCarousel from "./MiniBannerCarousel";
import { womenProducts } from "./Product";
import Footer from "./Footer";
import CoverParticules from "../utils/cover-particles";

const currentProducts = womenProducts;

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
    <div className="mb-6 border rounded-lg p-4 shadow-md">
      <div
        className="font-semibold mb-2 cursor-pointer flex justify-between items-center "
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

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>([]);

  const handleCategoryFilterChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleTypeFilterChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSurfaceFilterChange = (surface: string) => {
    if (selectedSurfaces.includes(surface)) {
      setSelectedSurfaces(selectedSurfaces.filter((s) => s !== surface));
    } else {
      setSelectedSurfaces([...selectedSurfaces, surface]);
    }
  };

  const filteredProducts = currentProducts.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(product.type || "");
    const surfaceMatch =
      selectedSurfaces.length === 0 ||
      selectedSurfaces.includes(product.surface || "");
    return categoryMatch && typeMatch && surfaceMatch;
  });

  return (
    <div>
      <div className="fixed">
        <CoverParticules />
      </div>
      <MiniBannerCarousel />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-10">
        <div className="w-full lg:w-1/4 pr-6 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 ">Filters</h3>

          <div className="mb-6 border border-white rounded-lg p-4 shadow-md">
            <h4 className="font-semibold mb-2 ">Opportunities</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/women/shop-women/20-off"
                  className="hover:underline "
                >
                  20% OFF
                </a>
              </li>
              <li>
                <a
                  href="/women/shop-women/30-off"
                  className="hover:underline "
                >
                  30% OFF
                </a>
              </li>
              <li>
                <a
                  href="/women/shop-women/40-off"
                  className="hover:underline "
                >
                  40% OFF
                </a>
              </li>
              <li>
                <a
                  href="/women/shop-women/50-off"
                  className="hover:underline "
                >
                  50% OFF
                </a>
              </li>
            </ul>
          </div>

          <FilterSection
            title="Categories"
            isOpen={isCategoryOpen}
            toggleOpen={() => setIsCategoryOpen(!isCategoryOpen)}
            options={["Footwear", "Clothing", "Accessories"]}
            onFilterChange={handleCategoryFilterChange}
          />

          <FilterSection
            title="Type of Products"
            isOpen={isProductTypeOpen}
            toggleOpen={() => setIsProductTypeOpen(!isProductTypeOpen)}
            options={["Boots", "Sweatshirts", "Leggings", "T-Shirts"]}
            onFilterChange={handleTypeFilterChange}
          />

          <FilterSection
            title="Surface"
            isOpen={isSurfaceOpen}
            toggleOpen={() => setIsSurfaceOpen(!isSurfaceOpen)}
            options={["indoor court", "natural grass", "synthetic grass"]}
            onFilterChange={handleSurfaceFilterChange}
          />
        </div>

        <div className="w-full lg:w-3/4">
          <h3 className="text-lg font-semibold mb-4 ">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Link to={`/women/product/${product.id}`} key={product.id}>
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
