import { useRef } from "react";

const featuredItems = [
  {
    id: 1,
    name: "Nike Air Max 90",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/855b3494-8ab6-45be-ae70-6978d2849cd0___e34b71fc2319e7754132bb24476a7172.jpg",
  },
  {
    id: 2,
    name: "Jordan Collection",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9c6bfbc9-b335-4fc3-9828-56c7e31380fb___716e22b4df40540eac4efb5ee7f5d38b.jpg",
  },
  {
    id: 3,
    name: "Nike Winter Wear",
    imageUrl:
      "https://nikearprod.vtexassets.com/arquivos/ids/723646-1000-1000?v=638301471799430000&width=1000&height=1000&aspect=true",
  },
  {
    id: 4,
    name: "Nike Pro Collection",
    imageUrl:
      "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/fbe6bfa8-272c-4583-a028-cda6a254c98b___bb505281e426e40a8ec5b79d84ceb943.png",
  },
  {
    id: 5,
    name: "Nike Air Max",
    imageUrl:
      "https://celadasa.vtexassets.com/arquivos/ids/298161-800-auto?v=638524081020100000&width=800&height=auto&aspect=true",
  },
  {
    id: 6,
    name: "Nike introduces GameOn, a new professional racing program for all athletes",
    imageUrl:
      "https://res.cloudinary.com/dmubfrefi/image/private/s--9wnryYYS--/c_crop,h_688,w_1030,x_0,y_130/c_scale,w_640/f_auto/q_auto/v1/dee-about-cms-prod-medias/b241f64a-0f18-4ee8-9a6b-d07d0fc74ecb/nike-gameon-event-1.jpg?_a=BAAAV6Bs",
  },
];

interface FeaturedProps {
  darkMode: boolean;
}

const Featured: React.FC<FeaturedProps> = ({ darkMode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: "auto",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: "auto",
      });
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-10`}>
      <div className="max-w-1xl mx-auto">
        <h2 className={`${darkMode ? 'text-white' : 'text-black'} text-4xl font-bold mb-6 text-center bg-gray-300`}>
          Featured
        </h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
            onClick={scrollLeft}
          >
            ‹
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full"
            onClick={scrollRight}
          >
            ›
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-scroll scrollbar-hide"
          >
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} min-w-[350px] shadow-lg rounded-lg p-4`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-100 object-cover rounded-lg"
                />
                <div className="p-4 text-left">
                  <h3 className={`${darkMode ? 'text-white' : 'text-black'} text-xl font-semibold`}>
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
