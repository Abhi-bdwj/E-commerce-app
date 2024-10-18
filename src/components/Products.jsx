import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/utils/productSlice";
import ProductCard from "./ProductCard";
import { Star } from "lucide-react";

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === "loading") {
    return <>Loading</>;
  }
  if (status === "failed") {
    return <>Error:{error}</>;
  }
  console.log(items);
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
