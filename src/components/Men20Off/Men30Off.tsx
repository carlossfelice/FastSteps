const menProducts30Off = [
  {
    id: 1,
    name: "Jordan men's sneaker",
    price: "$280",
    discountedPrice: "$254",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995948-1000-1000?v=638556550775400000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Air Jordan 13 wheat",
    price: "$190",
    discountedPrice: "$162",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/808735-1000-1000?v=638382397896870000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Men's Formal Jogging",
    price: "$100",
    discountedPrice: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994494-1000-1000?v=638556528507530000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Fashionable men's pants",
    price: "$220",
    discountedPrice: "$190",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994914-1000-1000?v=638556535073030000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Men's hooded sweatshirt",
    price: "$190",
    discountedPrice: "$170",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994900-1000-1000?v=638556534856000000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Men's Running T-shirt",
    price: "$190",
    discountedPrice: "$170",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996671-1000-1000?v=638556561497500000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Fashion T-shirt for Men",
    price: "$190",
    discountedPrice: "$160",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996499-1000-1000?v=638556558857200000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Men's Running T-shirt",
    price: "$190",
    discountedPrice: "$170",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996675-1000-1000?v=638556561558900000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Jordan Jumpman",
    price: "$190",
    discountedPrice: "$160",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/379259-1000-1000?v=638138933375300000&width=1000&height=1000&aspect=true",
  },
];

const Men30Off = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">
        Men's 30% Off
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menProducts30Off.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-600 line-through">{product.price}</p>
              <p className="text-green-600 font-bold">
                {product.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men30Off;
