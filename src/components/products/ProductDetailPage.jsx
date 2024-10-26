import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ImageCarousel } from "../layout/ImageCarousel";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import ProductReviewAccordion from "./ProductReviewAccordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/utils/cartSlice";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductDetailPage = () => {
  const location = useLocation();
  const { state } = location;
  const product = state?.product;

  if (!product) {
    return <p>Product not found! Please return to the product list.</p>;
  }

  const originalPrice = Math.round(
    product.price / (1 - product.discountPercentage / 100)
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const errorRef = useRef(null);

  const handleQuantityChange = (value) => {
    setQuantity(Number(value));
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    if (errorRef.current) {
      errorRef.current.textContent = "";
    }
  };

  const handleAddToCart = () => {
    const requiresSize =
      product.tags.includes("footwear") || product.tags.includes("clothing");

    if (requiresSize && !selectedSize) {
      if (errorRef.current) {
        errorRef.current.textContent = "*Please Select a size*";
      }
    } else {
      dispatch(
        addToCart({
          product,
          selectedSize: requiresSize ? selectedSize : undefined,
          quantity,
        })
      );
    }
  };

  return (
    <div className="flex pr-10 mb-40">
      <div className="pr-36 pl-28 pt-24 w-1/2">
        <ImageCarousel images={product.images} />
      </div>

      <div className="flex-1 pt-24 pr-10">
        <h2 className="text-4xl font-semibold">{product.title}</h2>

        <div className="mt-1 max-w-xl">
          <p className="font-extralight text-md pt-6">{product.description}</p>
        </div>

        <div>
          <div className="flex">
            <h2 className="text-4xl font-medium mt-3">${product.price}</h2>
            <h2 className="text-gray-500 line-through pl-2 mt-5 text-2xl">
              ${originalPrice}
            </h2>
          </div>
          <h2 className="text-red-500 text-base">{`(${product.discountPercentage}% OFF)`}</h2>
        </div>

        <form className="pt-3 rounded-md">
          {product.tags.includes("footwear") ||
          product.tags.includes("clothing") ? (
            <div className="flex space-x-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeSelect(size)}
                  className={`border rounded-md py-2 px-4 transition duration-200 ${
                    selectedSize === size
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300"
                  } hover:bg-blue-50`}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          ) : null}

          <p ref={errorRef} className="text-red-500" />

          {selectedSize && (
            <div className="mt-2 text-md text-blue-600">
              Selected Size: <strong>{selectedSize}</strong>
            </div>
          )}

          <div className="mt-4 flex items-center mb-3">
            <span className="pr-2 text-md">Qty :</span>
            <Select
              onValueChange={handleQuantityChange}
              defaultValue={String(quantity)}
            >
              <SelectTrigger className="w-24 border-gray-300">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                  <SelectItem key={i} value={String(i + 1)}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <span
            className={`${
              product.availabilityStatus === "In Stock"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {product.availabilityStatus}
          </span>

          {product.rating && (
            <div className="text-blue-600 mt-1">
              <h2> Rating : ★ {product.rating}</h2>
            </div>
          )}

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-6 flex w-80 items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </form>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="mt-12 border-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Details</AccordionTrigger>
            <AccordionContent>
              <div>
                {product.brand && <h2>Brand : {product.brand}</h2>}
                {product.category && <h2>Type : {product.category}</h2>}
                {product.dimensions.height && (
                  <h2>Height: {product.dimensions.height} cm</h2>
                )}
                {product.dimensions.depth && (
                  <h2>Depth: {product.dimensions.depth} cm</h2>
                )}
                {product.dimensions.width && (
                  <h2>Width: {product.dimensions.width} cm</h2>
                )}
                {product.warrantyInformation && (
                  <h2>Warranty: {product.warrantyInformation}</h2>
                )}
                {product.returnPolicy && (
                  <h2>Return Policy: {product.returnPolicy}</h2>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 pt-4">
          <ProductReviewAccordion allReviews={product.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
