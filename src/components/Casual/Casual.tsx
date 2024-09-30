const casualProducts = [
  {
    id: 1,
    name: "Casual vest for women",
    price: "$100",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1027701-1000-1000?v=638581983409070000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Casual pants for women",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/879696-1000-1000?v=638467307149170000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Fashion jacket for women",
    price: "$220",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995501-1000-1000?v=638556544233400000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Nike Casual Pants Jordan",
    price: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994820-1000-1000?v=638556533506700000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Casual pants for women new style",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/723737-1000-1000?v=638301473833430000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Nike Sportswear Phoenix Cozy Boucle",
    price: "$150",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/846156-1000-1000?v=638388501347900000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Nike Sportswear Tech Fleece",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/910521-1000-1000?v=638500845854800000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Nike Trail Repel Casual",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/811892-1000-1000?v=638382453745500000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Nike Bliss Jacket for women",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/912529-1000-1000?v=638512098550270000&width=1000&height=1000&aspect=true",
  },
];

const Casual = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-violet-600 animate-pulse drop-shadow-lg">
        Casual
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {casualProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-600">
                {product.name}
              </h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casual;
