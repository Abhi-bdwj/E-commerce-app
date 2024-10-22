import React from "react";
import { useParams } from "react-router-dom";
import useGetProductsByCategory from "@/hooks/useGetProductsByCategory";
import ProductCard from "./ProductCard";

const ProductsByCategory = () => {
  const { categoryName } = useParams();
  const { selectedCategoryProducts, status, error } =
    useGetProductsByCategory(categoryName);

  if (status === "loading") return <div>Loading products...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">  
          Products in "{categoryName}"
        </h2>

        {selectedCategoryProducts.length === 0 ? (
          <div>No products found for this category.</div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {selectedCategoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.images[0]}
                price={product.price}
                rating={product.rating}
                brand={product.brand}
                availabilityStatus={product.availabilityStatus}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsByCategory;
