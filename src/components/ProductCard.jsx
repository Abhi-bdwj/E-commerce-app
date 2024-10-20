import React from "react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, price, rating, image, productId } = props;

  const handleAddToCart = (event, id) => {
    event.preventDefault();
    console.log(`Added product with ID: ${id} to cart`);
  };

  return (
    <div className="flex flex-col h-full w-72 group relative border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt="Product Image"
          src={image}
          className=" object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className=" flex-grow p-2 bg-white">
        <h3 className="text-sm text-gray-700 font-semibold ">
          <Link to="#" onClick={(e) => handleAddToCart(e, productId)}>
            <span aria-hidden="true" className="absolute inset-0 " />
            {title}
          </Link>
        </h3>
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className=" flex text-sm text-muted-foreground ">
              {rating}
              <Star className="w-5 h-5 fill-primary text-primary mr-1 mb-1 pt-1" />
            </span>
          </div>
          <p className="text-sm font-medium text-gray-900 ">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
