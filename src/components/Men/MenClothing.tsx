const menClothingProducts = [
  {
    id: 1,
    name: "Fashion T-shirt for Men",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996490-1000-1000?v=638556558729200000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "T-shirt for Men Green",
    price: "$110",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996663-1000-1000?v=638556561378870000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Nike Sportswear Tech Fleece Reimagined",
    price: "$149",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994930-1000-1000?v=638556535325530000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Nike Strike Buzo",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995328-1000-1000?v=638556541519800000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Fashionable diver for men",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995433-1000-1000?v=638556543115100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Men Fashion Jacket",
    price: "$250",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995300-1000-1000?v=638556541087130000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Muscle shirt for Men",
    price: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/877583-1000-1000?v=638467279382100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Pant for Men",
    price: "$190",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994872-1000-1000?v=638556534371400000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Nike Jacket",
    price: "$350",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1021653-1000-1000?v=638566625696000000&width=1000&height=1000&aspect=true",
  },
];

const MenClothing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-800 animate-pulse drop-shadow-lg">
        Men's Footwear
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menClothingProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenClothing;
