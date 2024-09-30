const menProducts50Off = [
  {
    id: 1,
    name: "Short for Men",
    price: "$100",
    discountedPrice: "$50",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/770879-1000-1000?v=638327212506000000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "men's fashion t-shirt",
    price: "$120",
    discountedPrice: "$60",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/912764-1000-1000?v=638530173147070000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Nike Short",
    price: "$90",
    discountedPrice: "$45",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/889577-1000-1000?v=638469796558300000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Jordan men's Jacket",
    price: "$220",
    discountedPrice: "$110",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/912760-1000-1000?v=638530164001000000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Air Jordan Pant for Men",
    price: "$190",
    discountedPrice: "$95",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/889567-1000-1000?v=638469790827470000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Men's Soccer Jersey",
    price: "$160",
    discountedPrice: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/888706-1000-1000?v=638469756274500000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Fashion Short for Men",
    price: "$100",
    discountedPrice: "$60",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/907052-1000-1000?v=638471605868730000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Air Jordan 5 Retro",
    price: "$450",
    discountedPrice: "$225",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995948-1000-1000?v=638556550775400000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Nike Premier 3",
    price: "$190",
    discountedPrice: "$140",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/997374-1000-1000?v=638556571502630000&width=1000&height=1000&aspect=true",
  },
];

const Men50Off = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">
        Men's 50% Off
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menProducts50Off.map((product) => (
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

export default Men50Off;
