import { useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: "$120",
    imageUrl:
      "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw14fc9989/products/NIFD9082-101/NIFD9082-101-1.JPG",
  },
  {
    id: 2,
    name: "Nike Goretex",
    price: "$180",
    imageUrl:
      "https://media.revistagq.com/photos/65363362a587a673d5d29e45/3:2/w_1140,h_760,c_limit/nike-air-max-90-gore-tex-grey-black.jpg",
  },
  {
    id: 3,
    name: "Nike RS-X",
    price: "$150",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU79TAIBh07zjL6iO_6Dj5r57lX1DyYtWvuQ&s",
  },
  {
    id: 4,
    name: "Nike Air MileniumSport",
    price: "$190",
    imageUrl:
      "https://d22fxaf9t8d39k.cloudfront.net/3eaadb9d9125d190f91de8ac5b80be84829fb3501834df3872864fb5490292c6172479.jpg",
  },
  {
    id: 5,
    name: "Nike max",
    price: "$100",
    imageUrl:
      "https://celadasa.vtexassets.com/arquivos/ids/298161-800-auto?v=638524081020100000&width=800&height=auto&aspect=true",
  },
  {
    id: 6,
    name: "Nike Air Max 90",
    price: "$120",
    imageUrl:
      "https://acdn.mitiendanube.com/stores/986/786/products/6f546503-03c3-4891-ae60-ce22436ada7f-87697cce0fa07365c717082054185137-240-0.jpeg",
  },
  {
    id: 7,
    name: "Nike Air Max white",
    price: "$220",
    imageUrl:
      "https://acdn.mitiendanube.com/stores/002/840/106/products/d1-1714cee40112adcbb816962921583668-640-0.jpg",
  },
  {
    id: 8,
    name: "Nike Air Max blue",
    price: "$220",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs258zJ-kzf65dmiIDqBBdFgwSMvhW57UreA&s",
  },
  {
    id: 9,
    name: "Nike Air Spontaneous",
    price: "$250",
    imageUrl:
      "https://i.pinimg.com/originals/f7/f8/2e/f7f82e2e732d8fcb5f5ac30c551bccdb.jpg",
  },
  {
    id: 10,
    name: "Nike Air Max 90",
    price: "$120",
    imageUrl:
      "https://i.pinimg.com/736x/5e/2a/6d/5e2a6dc2b571083b78cc92a63d18ddc8.jpg",
  },
];

const BestSeller = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          top: 0,
          left: 400,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gray-300">
          Best Sellers
        </h2>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[270px] sm:min-w-[400px] bg-gray-100 shadow-lg rounded-lg p-6 snap-center"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
