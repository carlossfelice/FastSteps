const menProducts20Off = [
  {
    id: 1,
    name: "Men's Running Shoes",
    price: "$180",
    discountedPrice: "$164",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1100545-1000-1000?v=638628246645230000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Men's Casual Sneakers",
    price: "$190",
    discountedPrice: "$172",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981654-1000-1000?v=638555462901200000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Men's Formal Shoes",
    price: "$120",
    discountedPrice: "$100",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981745-1000-1000?v=638555464399070000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Fashionable men's diver",
    price: "$150",
    discountedPrice: "$135",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995433-1000-1000?v=638556543115100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Men's Shirt",
    price: "$80",
    discountedPrice: "$69",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/877583-1000-1000?v=638467279382100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Men's T-shirt",
    price: "$190",
    discountedPrice: "$172",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996490-1000-1000?v=638556558729200000&width=1000&height=1000&aspect=true",
  },
];

const Men20Off = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">
        Men's 20% Off
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menProducts20Off.map((product) => (
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

export default Men20Off;
