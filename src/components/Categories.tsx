const categories = [
  {
    id: 1,
    name: "Shop Mujer",
    imageUrl:
      "https://skechers.com.ar/cdn/shop/files/SHOP_MUJER_1.png?v=1719575156&width=550",
    link: "/Women",
  },
  {
    id: 2,
    name: "Shop Hombre",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI75N0MU3v8CY3KilS3kBXTaqTmjiE63Af7g&s",
    link: "/Men",
  },
  {
    id: 3,
    name: "Shop Niños Próximamente",
    imageUrl:
      "https://skechers.com.ar/cdn/shop/files/KIDS.png?v=1719575155&width=550",
    link: "/shop-ninos",
  },
];

const Categories = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-8xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gray-300">
          The comfort Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <a
                  href={category.link}
                  className="text-white text-lg font-bold text-center py-4 bg-blue-500 bg-opacity-80 hover:bg-blue-700 rounded-b-lg"
                >
                  {category.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
