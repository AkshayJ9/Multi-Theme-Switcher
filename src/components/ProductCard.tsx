import React from "react";
import { useTheme } from "../context/ThemeContext";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price }) => {
  const { theme } = useTheme();

  const themeClasses =
    theme === "theme3"
      ? "bg-pink-200 hover:bg-pink-300 border-4 border-yellow-400"
      : "bg-white hover:shadow-lg";

  return (
    <div
      className={`p-4 shadow rounded transition-all duration-300 ${themeClasses}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="font-semibold text-gray-700 truncate">{title}</h3>
      <p className="text-blue-600 font-bold mt-1">${price}</p>
    </div>
  );
};

export default ProductCard;
