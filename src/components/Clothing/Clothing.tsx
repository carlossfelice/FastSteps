const clothingProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT T-Shirt",
    price: "$35",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/359796fd-b1f1-47de-9225-849b10e56d7c___f5a5421943f2c0866b1dddb8ea8c8389.jpg",
  },
  {
    id: 2,
    name: "Sweater and shorts",
    price: "$60",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/4961c87f-0b8d-476d-9faa-a7c3dce08f52___2dae95d4acf044f21c281c53e0ae2c13.jpg",
  },
  {
    id: 3,
    name: "Nike Windrunner Nude",
    price: "$100",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/92f489c9-a5f9-4af9-b8e3-0132c17134ed___884e06358cac32026a6b253822ef314f.jpg",
  },
  {
    id: 4,
    name: "Nike Green",
    price: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/6013e54b-80ae-4404-a9f7-ca0e89925f36___94c90e061da2ca3c07589c20cb768d07.jpg",
  },
  {
    id: 5,
    name: "Nike Violet",
    price: "$160",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/a423ccab-bb26-4579-830d-aafa9874a3b1___4a1ed9535d9021c6bbd73015398bb4ee.jpg",
  },

  {
    id: 6,
    name: "Leggings set",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/20e58c55-fc84-45eb-9fec-10c8fbf0c208___5866e36c51063728ee2427672d38b42c.jpg",
  },
  {
    id: 7,
    name: "Nike Sportwear Club",
    price: "$300",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996588-1000-1000?v=638556560178170000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Nike Swoosh",
    price: "$250",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995368-1000-1000?v=638556542137330000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Nike Switf Element",
    price: "$250",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/994840-1000-1000?v=638556533836370000&width=1000&height=1000&aspect=true",
  },
];

const Clothing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Mother's Day Clothing{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clothingProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-90 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-600">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothing;
