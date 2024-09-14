import { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    text: "Up to 50% off on selected items",
    linkText: "See Products",
    linkUrl: "/shop-mujer/50-off",
  },
  {
    id: 2,
    text: "Up to 9 insterest-free installments at Selected Banks",
    linkText: "See Bank Promotions",
    linkUrl: "/promociones-bancarias",
  },
  {
    id: 3,
    text: "Free Shipping on Orders over 250",
    linkText: "See Products",
    linkUrl: "/shop-mujer/envios-gratis",
  },
];

const MiniBannerCarousel = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) =>
        prevBanner === banners.length - 1 ? 0 : prevBanner + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-200 py-3 text-center">
      <p className="text-gray-800">
        {banners[currentBanner].text}{" "}
        <a
          href={banners[currentBanner].linkUrl}
          className="text-blue-600 hover:underline"
        >
          {banners[currentBanner].linkText}
        </a>
      </p>
    </div>
  );
};

export default MiniBannerCarousel;
