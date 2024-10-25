import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ImageCarousel } from "../layout/ImageCarousel";

const ProductDetailPage = () => {
  const location = useLocation();
  const { state } = location;

  const product = state?.product;

  if (!product) {
    return <p>Product not found!</p>;
  }

  const [quantity, setQuantity] = useState(1); 
  const handleQuantityChange = (value) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + value, 1)); 
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Color:", selectedColor);
    console.log("Quantity:", quantity);
  };

  return (
    <div className="flex pr-10 mb-40">
      {/* Images */}
      <div className="pr-36 pl-28 pt-24 w-1/2">
        <ImageCarousel images={product.images} />
      </div>

      {/* Product Details */}
      <div className="flex-1 pt-24 pr-10">
        {/* Title */}
        <h2 className="text-3xl font-semibold">{product.title}</h2>

        {/* Description */}
        <div className="mt-1 max-w-xl">
          <p className="font-extralight text-md p-4">{product.description}</p>
        </div>

        {/* Options */}
        <div className="mt-6">
          <form
            onSubmit={handleSubmit}
            className="bg-pink-400 p-4 mt-4 rounded-md"
          >
            {/* Sizes */}
            <div className="bg-orange-300 p-2 rounded-md mt-2">
              Sizes: {product.sizes?.join(", ")}
            </div>

            {/* Quantity */}
            <div className="mt-2 flex items-center">
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                className="border border-gray-300 rounded-l-sm w-10 px-2 py-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-10 h-10 text-center border-t border-b border-gray-300 rounded-none"
              />
              <button
                type="button"
                onClick={() => handleQuantityChange(1)}
                className="border border-gray-300 rounded-r-sm w-10 px-2 py-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </form>
          {/* Reviews */}
          <div className="p-2">{product.reviews?.length} reviews</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
