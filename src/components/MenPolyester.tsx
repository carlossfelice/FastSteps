

const menPolyesterProducts = [
    {
      id: 1,
      name: "LeBron x Liverpool FC",
      price: "$100",
      imageUrl:
        "https://nikearprod.vtexassets.com/arquivos/ids/1037799-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 2,
      name: "FC Barcelona Strike",
      price: "$150",
      imageUrl:
        "https://nikearprod.vtexassets.com/arquivos/ids/1048893-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 3,
      name: "Nike Dri-FIT UV Miler",
      price: "$55",
      imageUrl:
        "https://nikearprod.vtexassets.com/arquivos/ids/533215-800-800?width=800&height=800&aspect=true",
    },
    {
        id: 4,
        name: "Paris Saint-Germain local 2024/25 Stadium ",
        price: "$209",
        imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/1048938-800-800?width=800&height=800&aspect=true",
    },
    {
        id: 5,
        name: "Liverpool FC local 2024/25 Stadium",
        price: "$200",
        imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/1048953-800-800?width=800&height=800&aspect=true",
    },
    {
        id: 6,
        name: "Nike Club Fleece",
        price: "$250",
        imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/995433-1000-1000?v=638556543115100000&width=1000&height=1000&aspect=true"
    }

  ];
  
  const MenPolyester = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">Men's Polyester</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menPolyesterProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-98 object-cover rounded-lg"
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
  
  export default MenPolyester;
  