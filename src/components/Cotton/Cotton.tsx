const cottonProducts = [
  {
    id: 1,
    name: "Cotton Fashion women's t-shirt",
    price: "$25",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1021685-1000-1000?v=638566663880570000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Cotton t-shirt",
    price: "$45",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996588-1000-1000?v=638556560178170000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Cotton short and t-shirt",
    price: "$60",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996581-1000-1000?v=638556560072730000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Women's cotton jumpsuit and leggings",
    price: "$350",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995487-1000-1000?v=638556544028100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Cotton Fashion T-shirt for women",
    price: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996352-1000-1000?v=638556556666530000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Cotton t-shirt",
    price: "$45",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/880558-1000-1000?v=638467320038170000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Cotton t-shirt Nike Sportswear Essential",
    price: "$45",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/812089-1000-1000?v=638382457148230000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Women's training skirt",
    price: "$125",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/845284-1000-1000?v=638388486763600000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Cotton t-shirt",
    price: "$60",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/a5ed8101-cec0-4191-8d1f-54ebf296dfe1___3e886ed3c2c89778aae5f3180d06f5c2.jpg",
  },
];

const Cotton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Cotton Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cottonProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-120 object-cover rounded-lg"
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

export default Cotton;
