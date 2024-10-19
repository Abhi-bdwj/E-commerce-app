import React from "react";
import { useParams } from "react-router-dom";
import useGetProductsByCategory from "@/hooks/useGetProductsByCategory";
import ProductCard from "@/components/ProductCard";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const { selectedCategoryProducts, status, error } = useGetProductsByCategory(categoryName);

  if (status === "loading") return <div>Loading products...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Products in "{categoryName}"
          </h2>

          {selectedCategoryProducts.length === 0 ? (
            <div>No products found for this category.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategoryProducts.map((product) => (
                <ProductCard key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
