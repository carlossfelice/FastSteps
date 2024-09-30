const formalProducts = [
  {
    id: 1,
    name: "Formal shirt flight Heritage",
    price: "$69",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/880458-1000-1000?v=638467318583700000&width=1000&height=1000&aspect=true",
  },
  {
    id: 2,
    name: "Nike Essential shirt",
    price: "$200",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/907667-1000-1000?v=638487885297630000&width=1000&height=1000&aspect=true",
  },
  {
    id: 3,
    name: "San Lorenzo home shirt",
    price: "$300",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/888865-1000-1000?v=638469758999730000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Fashion T-shirt for women",
    price: "$80",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/907667-1000-1000?v=638487885297630000&width=1000&height=1000&aspect=true",
  },
  {
    id: 5,
    name: "Women's soccer jersey",
    price: "$165",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/996028-1000-1000?v=638556551884400000&width=1000&height=1000&aspect=true",
  },
  {
    id: 6,
    name: "Formal shirt for women",
    price: "$120",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/995118-1000-1000?v=638556538372100000&width=1000&height=1000&aspect=true",
  },
  {
    id: 7,
    name: "Jordan women's t-shirt",
    price: "$95",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/846250-1000-1000?v=638388502932600000&width=1000&height=1000&aspect=true",
  },
  {
    id: 8,
    name: "Air Jordan 4  Retro white and Gold for women",
    price: "$120",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1026672-1000-1000?v=638581386812570000&width=1000&height=1000&aspect=true",
  },
  {
    id: 9,
    name: "Air Nike  Retro white for women",
    price: "$120",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/1037117-1000-1000?v=638588104707230000&width=1000&height=1000&aspect=true",
  },
];

const Formal = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center my-8 text-violet-600 animate-pulse drop-shadow-lg">
        Formal Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {formalProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-98 object-cover rounded-lg"
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

export default Formal;
