

const menFormalProducts = [
    {
      id: 1,
      name: "Men's Formal Pant",
      price: "$90",
      imageUrl:
        "https://nikearprod.vtexassets.com/arquivos/ids/908011-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 2,
      name: "Men's Formal Pants",
      price: "$170",
      imageUrl:
        "https://nikearprod.vtexassets.com/arquivos/ids/997464-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 3,
      name: "Men's Formal Pant, Nike ACG",
      price: "$180",
      imageUrl:
        "https://nikearprod.vtexassets.com/arquivos/ids/1037708-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 4,
      name: "Men's Fashion Jacket",
      price: "209",
      imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/995302-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 5,
      name: "Nike ACG Cinder Cone",
      price: "$146",
      imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/655025-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 6,
      name: "Nike Sportswear Tech Fleece Reimagined",
      price: "$200",
      imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/1027670-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 7,
      name: "Men's Casual Fashion Diver",
      price: "$190",
      imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/1027664-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 8,
      name: "Jordan Essentials Chicago",
      price: "$100",
      imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/994872-800-800?width=800&height=800&aspect=true",
    },
    {
      id: 9,
      name: "Nike Life",
      price: "199",
      imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/995307-800-800?width=800&height=800&aspect=true",
    }

  ];
  
  const MenFormal = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-extrabold text-center my-8 text-blue-700 animate-pulse drop-shadow-lg">Men's Formal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menFormalProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
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
  
  export default MenFormal;
  