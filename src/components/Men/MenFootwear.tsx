const menFootwearProducts = [
  {
    id: 1,
    name: "Men's Running Shoes",
    price: "$220",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1100545-1000-1000?v=638628246645230000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Men's Casual Sneakers",
    price: "$190",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996944-1000-1000?v=638556565527430000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Men's Formal Shoes",
    price: "$250",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981745-1000-1000?v=638555464399070000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Air Jordan 1 Low SE",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/997225-1000-1000?v=638556569401200000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Nike Pegasus 41 Electric",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1047780-1000-1000?v=638602941426530000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Air Jordan 1 Low SE",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/971256-1000-1000?v=638551836364130000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Nike Blazer Low Next Nature",
    price: "$300",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/981390-1000-1000?v=638555458663430000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Nike Tempo Esmerald Legend",
    price: "$190",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996158-1000-1000?v=638556553764670000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Nike Mercurial Superfly 9 Elite",
    price: "$350",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996822-1000-1000?v=638556563791600000&width=1000&height=1000&aspect=true",
  },
];

const MenFootwear = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-800 animate-pulse drop-shadow-lg">
        Men's Footwear
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menFootwearProducts.map((product) => (
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

export default MenFootwear;
