import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/utils/productSlice";
import ProductCard from "../components/products/ProductCard";
import ShimmerCard from "../utils/ShimmerCard";
import { Paginations } from "@/components/layout/Paginations";

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // if (status === "Loading") {
  //   return <ShimmerCard />;
  // }
  if (status === "failed") {
    return <>Error:{error}</>;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Products ({items.length})
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((product) => (
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
      <div className="mb-24">
        <Paginations />
      </div>
    </div>
  );
};

export default Products;
