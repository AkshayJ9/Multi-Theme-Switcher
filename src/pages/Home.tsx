import React from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import { useTheme } from "../context/ThemeContext";

const Home: React.FC = () => {
  const { products, loading } = useFetchProducts();
  const { theme } = useTheme();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Multi-Theme App</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Switch themes to see different layouts and styles.
      </p>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div
          className={`grid gap-4 ${
            theme === "theme3"
              ? "grid-cols-2 md:grid-cols-4" // card-heavy grid for theme3
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              image={p.image}
              price={p.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
