const accessoriesProducts = [
  {
    id: 1,
    name: "Nike Mercurial Hardshell",
    price: "$25",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981766-1000-1000?v=638555464731970000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Nike Streak Volleyball",
    price: "$55",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/912904-1000-1000?v=638538797669000000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Jordan Club",
    price: "$120",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/846491-1000-1000?v=638388507607700000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Nike Mercural Lite",
    price: "$110",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981761-1000-1000?v=638555464646800000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Nike Brasilia JDI",
    price: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/972178-1000-1000?v=638551852579800000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "unisex training headbands",
    price: "$100",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/912656-1000-1000?v=638520695157330000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Unisex Cell Phone Case",
    price: "$20",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/912668-1000-1000?v=638520700124370000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Nike Academy Team",
    price: "$100",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981868-1000-1000?v=638555466337430000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Nike Elemental Premium",
    price: "$60",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981743-1000-1000?v=638555464369530000&width=1000&height=1000&aspect=true",
  },
];

const Accessories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-violet-600 animate-pulse drop-shadow-lg">
        Accessories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessoriesProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                {product.name}
              </h4>
              <p className="text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
