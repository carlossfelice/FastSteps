

const menCottonProducts = [
  {
    id: 1,
    name: "Nike Sportswear Club Fleece Joggers",
    price: "$95",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994494-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 2,
    name: "Nike Miler",
    price: "$130",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994777-1000-1000?v=638556532808030000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "Nike Dri-FIT UV Miler",
    price: "$55",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/533215-800-800?width=800&height=800&aspect=true",
  },
];

const MenCotton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">Men's Cotton</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menCottonProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCotton;
