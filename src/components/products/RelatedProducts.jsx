import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProducts } from "@/utils/productSlice";
const RelatedProducts = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const randomProducts = [...items].sort(() => 0.5 - Math.random()).slice(0, 8);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
         You may also Like.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {randomProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              rating={product.rating}
              brand={product.brand}
              availabilityStatus={product.availabilityStatus}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
