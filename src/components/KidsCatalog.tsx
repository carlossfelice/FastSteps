import { useState } from "react";
import { Link } from "react-router-dom";
import { kidsProducts } from "./ProductKids";
import MiniBannerCarousel from "./MiniBannerCarousel";
import Footer from "./Footer";
import CoverParticules from "../utils/cover-particles";

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

const KidsCatalog = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isSurfaceOpen, setIsSurfaceOpen] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>([]);
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);

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

  const handleDiscountFilterChange = (discount: string) => {
    setSelectedDiscount(discount);
  };

  const filteredProducts = kidsProducts.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.toLowerCase());

    const typeMatch =
      selectedTypes.length === 0 ||
      (product.type && selectedTypes.includes(product.type.toLowerCase()));

    const surfaceMatch =
      selectedSurfaces.length === 0 ||
      (product.surface &&
        selectedSurfaces.includes(product.surface.toLowerCase()));

    const discountMatch =
      selectedDiscount === null ||
      (product.discount && product.discount === selectedDiscount);

    return categoryMatch && typeMatch && surfaceMatch && discountMatch;
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

          <div className="mb-6 border rounded-lg p-4 shadow-md">
            <h4 className="font-semibold mb-2 ">Opportunities</h4>
            <ul className="space-y-3">
              {["20%", "30%", "40%", "50%"].map((discount) => (
                <li key={discount}>
                  <a
                    href={`/shop-children/${discount}-off`}
                    className="hover:underline "
                    onClick={(e) => {
                      e.preventDefault();
                      handleDiscountFilterChange(discount);
                    }}
                  >
                    {discount} OFF
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FilterSection
            title="Categories"
            isOpen={isCategoryOpen}
            toggleOpen={() => setIsCategoryOpen(!isCategoryOpen)}
            options={["footwear", "clothing", "accessories"]}
            onFilterChange={handleCategoryFilterChange}
          />

          <FilterSection
            title="Type of Products"
            isOpen={isProductTypeOpen}
            toggleOpen={() => setIsProductTypeOpen(!isProductTypeOpen)}
            options={["shoes", "shirts"]}
            onFilterChange={handleTypeFilterChange}
          />

          <FilterSection
            title="surface"
            isOpen={isSurfaceOpen}
            toggleOpen={() => setIsSurfaceOpen(!isSurfaceOpen)}
            options={["indoor", "outdoor"]}
            onFilterChange={handleSurfaceFilterChange}
          />
        </div>

        <div className="w-full lg:w-3/4">
          <h3 className="text-lg font-semibold mb-4 ">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Link to={`/kids/product/${product.id}`} key={product.id}>
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
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
      <Footer />
    </div>
  );
};

export default KidsCatalog;
