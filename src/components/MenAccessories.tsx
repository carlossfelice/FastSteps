

const menAccessoriesProducts = [
  {
    id: 1,
    name: "Men's Sports Cap",
    price: "$90",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/846187-1000-1000?v=638388501839730000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Men's Running Socks",
    price: "$85",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/732079-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 3,
    name: "Men's Nike Premium, Unisex Fashion Keychain",
    price: "$45",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1048790-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 4,
    name: "Nike Premium, Unisex Fashion Keychain black",
    price: "$45",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1048791-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 5,
    name: "Nike Icon Cortez,Nike Icon Cortez",
    price: "$59",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1048802-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 6,
    name: "Nike Icon Air Max 90, Men's Wallet",
    price: "$70",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1048810-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 7,
    name: "Unisex Fashion Crossbody Bag",
    price: "$59",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1026612-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 8,
    name: "Nike Club Team Ball 2.0",
    price: "$150",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1048805-800-800?width=800&height=800&aspect=true",
  },
  {
    id: 9,
    name: "good deal options",
    price: "variety of offers",
    imageUrl: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/ea6c7674-cde8-4c24-80a5-def8c24e171f___229b77a2a7b23329cbbbca0f55053008.jpg",
  }

];

const MenAccessories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">Men's Accessories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menAccessoriesProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
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

export default MenAccessories;
