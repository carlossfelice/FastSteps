import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    text: "Up to 50% off on selected items",
    linkText: "See Products",
    linkUrl: "/shop-women/50-off",
  },
  {
    id: 2,
    text: "Up to 9 insterest-free installments at Selected Banks",
    linkText: "See Bank Promotions",
    linkUrl: "/bank-promotions",
  },
  {
    id: 3,
    text: "Free Shipping on Orders over 250",
    linkText: "See Products",
    linkUrl: "/shop-women/free-shipping",
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
        <Link
          to={banners[currentBanner].linkUrl}
          className="text-blue-600 hover:underline"
        >
          {banners[currentBanner].linkText}
        </Link>
      </p>
    </div>
  );
};

export default MiniBannerCarousel;
