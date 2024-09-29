const footwearProducts = [
  {
    id: 1,
    name: "Nike Air Force",
    price: "$120",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/7f4a3409-e4af-4ff2-8235-e1033d89370f___de5d20ad304c2df9a4ed932c6146423e.jpg",
  },
  {
    id: 2,
    name: "Nike Retro Run",
    price: "$180",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/6d266019-108d-4cc0-93b8-5dee3581a424___6a4028e8999b5709de95b6084e58d141.jpg",
  },
  {
    id: 3,
    name: "Blazer",
    price: "$220",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/3246dc3a-c498-47a8-98fd-e424528b0dcb___fa9ca44849ca5edd5f22bb075f80f1e6.jpg",
  },
  {
    id: 4,
    name: "Air Max",
    price: "$250",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/953f4308-21da-464f-a19f-02d6a16187be___ba2bfb7e6a53bacf326233898db31214.jpg",
  },
  {
    id: 5,
    name: "Air Max 90",
    price: "$280",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/7b19badb-99af-42b0-be68-f04380be4909___136656d8051a660775eb0fc0e2976f6e.jpg",
  },
  {
    id: 6,
    name: "Dunk",
    price: "$300",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/75e736c4-ef3a-4797-a333-4b2fbdba2667___748fd169c29965d04328e442583e7ed3.jpg",
  },
];

const Footwear = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">MOM RUN IN STYLE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {footwearProducts.map((product) => (
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

export default Footwear;
