const menProducts40Off = [
  {
    id: 1,
    name: "Fashion Sandals for Men",
    price: "$180",
    discountedPrice: "$144",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/971669-1000-1000?v=638551844688100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "men's fashion sneaker",
    price: "$190",
    discountedPrice: "$152",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/701733-1000-1000?v=638233911600100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Men's Formal Jogging",
    price: "$100",
    discountedPrice: "$60",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994494-1000-1000?v=638556528507530000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Jordan men's sneaker",
    price: "$220",
    discountedPrice: "$180",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/997178-1000-1000?v=638556568745530000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Air Jordan Legacy 312 Low",
    price: "$190",
    discountedPrice: "$140",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/440453-1000-1000?v=638145717967870000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Men's Soccer Jersey",
    price: "$160",
    discountedPrice: "$120",
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
    name: "Men's Running T-shirt",
    price: "$190",
    discountedPrice: "$150",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996675-1000-1000?v=638556561558900000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Jordan Jumpman",
    price: "$190",
    discountedPrice: "$150",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/379259-1000-1000?v=638138933375300000&width=1000&height=1000&aspect=true",
  },
];

const Men40Off = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">
        Men's 40% Off
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menProducts40Off.map((product) => (
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

export default Men40Off;
