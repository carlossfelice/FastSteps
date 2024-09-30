const polyesterProducts = [
  {
    id: 1,
    name: "Polyester Jacket and Pant",
    price: "$85",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047677-1000-1000?v=638596752387670000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Polyester Long sleeve t-shirt",
    price: "$35",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994840-1000-1000?v=638556533836370000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Polyester t-shirt women chill knit",
    price: "$55",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996595-1000-1000?v=638556560288500000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Polyester Fashion jacket for women",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1048829-1000-1000?v=638611645030830000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Polyester Jacket for women",
    price: "$120",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995418-1000-1000?v=638556542885500000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Polyester Pants for women",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/907929-1000-1000?v=638493973078000000&width=1000&height=1000&aspect=true",
  },
];

const Polyester = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Polyester Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {polyesterProducts.map((product) => (
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

export default Polyester;
