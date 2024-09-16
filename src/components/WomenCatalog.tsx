import { useState } from "react";
import MiniBannerCarousel from "./MiniBannerCarousel";
const products = [
  {
    id: 1,
    name: "Air Jordan 1 Low Black/Gorge Green",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981341-1000-1000?v=638555457858370000&width=1000&height=1000&aspect=true",
    price: "$120",
    new: true,
  },
  {
    id: 2,
    name: "Nike Indy High Support",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047711-1000-1000?v=638602940334100000&width=1000&height=1000&aspect=true",
    price: "$35",
    new: true,
  },
  {
    id: 3,
    name: "KD11 'Sunrise'",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047666-1000-1000?v=638596691306000000&width=1000&height=1000&aspect=true",
    price: "$95",
    new: true,
  },
  {
    id: 4,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/971742-1000-1000?v=638551846063700000&width=1000&height=1000&aspect=true",
    price: "$100",
    new: true,
  },
  {
    id: 5,
    name: "Nike Sport wears",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047677-1000-1000?v=638596752387670000&width=1000&height=1000&aspect=true",
    price: "$140",
    new: true,
  },
  {
    id: 6,
    name: "Nike indy light Support",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1048849-1000-1000?v=638614948183100000&width=1000&height=1000&aspect=true",
    price: "$105",
    new: true,
  },
  {
    id: 7,
    name: "Nike Air Max Plus",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996352-1000-1000?v=638556556666530000&width=1000&height=1000&aspect=true",
    price: "$200",
    new: true,
  },
  {
    id: 8,
    name: "Nike Sport Wear Classic",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/971164-1000-1000?v=638551834245100000&width=1000&height=1000&aspect=true",
    price: "$175",
    new: true,
  },
  {
    id: 9,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981457-1000-1000?v=638555459774570000&width=1000&height=1000&aspect=true",
    price: "$195",
    new: true,
  },
  {
    id: 10,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995487-1000-1000?v=638556544028100000&width=1000&height=1000&aspect=true",
    price: "$186",
    new: true,
  },
  {
    id: 11,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996782-1000-1000?v=638556563190130000&width=1000&height=1000&aspect=true",
    price: "$204",
    new: true,
  },
  {
    id: 12,
    name: "Nike Everyday Playground",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/865406-1000-1000?v=638400773659630000&width=1000&height=1000&aspect=true",
    price: "$45",
    new: true,
  },
  {
    id: 13,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/38055e71-5fdd-445d-b5d7-631f299d18c9___86728d5650dfe106a7900da33df99c73.png",
    price: "$229",
    new: true,
  },
  {
    id: 14,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/811252-1000-1000?v=638382442797300000&width=1000&height=1000&aspect=true",
    price: "$201",
    new: true,
  },
  {
    id: 15,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981766-1000-1000?v=638555464731970000&width=1000&height=1000&aspect=true",
    price: "$125",
    new: true,
  },
  {
    id: 16,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995442-1000-1000?v=638556543283400000&width=1000&height=1000&aspect=true",
    price: "$136",
    new: true,
  },
  {
    id: 17,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/794887-1000-1000?v=638379238800370000&width=1000&height=1000&aspect=true",
    price: "$225",
    new: true,
  },
  {
    id: 18,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/997421-1000-1000?v=638556572186600000&width=1000&height=1000&aspect=true",
    price: "$250",
    new: true,
  },
  {
    id: 19,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047670-1000-1000?v=638596753302100000&width=1000&height=1000&aspect=true",
    price: "$229",
    new: true,
  },
  {
    id: 20,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996581-1000-1000?v=638556560072730000&width=1000&height=1000&aspect=true",
    price: "$160",
    new: true,
  },
  {
    id: 21,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981761-1000-1000?v=638555464646800000&width=1000&height=1000&aspect=true",
    price: "$150",
    new: true,
  },
  {
    id: 22,
    name: "Jordan Club",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/846491-1000-1000?v=638388507607700000&width=1000&height=1000&aspect=true",
    price: "$190",
    new: true,
  },
  {
    id: 23,
    name: "Unisex Backpack",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981475-1000-1000?v=638555460056730000&width=1000&height=1000&aspect=true",
    price: "$65",
    new: true,
  },
  {
    id: 24,
    name: "Nike Sportswear",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/723503-1000-1000?v=638301468931570000&width=1000&height=1000&aspect=true",
    price: "$205",
    new: true,
  },
  {
    id: 25,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047675-1000-1000?v=638596754217570000&width=1000&height=1000&aspect=true",
    price: "$106",
    new: true,
  },
  {
    id: 26,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/971048-1000-1000?v=638551762818630000&width=1000&height=1000&aspect=true",
    price: "$97",
    new: true,
  },
  {
    id: 27,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047678-1000-1000?v=638596754217570000&width=1000&height=1000&aspect=true",
    price: "$75",
    new: true,
  },
  {
    id: 28,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047679-1000-1000?v=638596754217570000&width=1000&height=1000&aspect=true",
    price: "$89",
    new: true,
  },
  {
    id: 29,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047680-1000-1000?v=638596754217570000&width=1000&height=1000&aspect=true",
    price: "$210",
    new: true,
  },
  {
    id: 30,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/701402-1000-1000?v=638233907023100000&width=1000&height=1000&aspect=true",
    price: "$80",
    new: true,
  },
];

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
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg p-4"
              >
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenCatalog;
