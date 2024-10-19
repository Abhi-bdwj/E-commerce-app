import React from "react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

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
      <div className=" flex-grow p-2 bg-slate-200">
        <h3 className="text-sm text-gray-700 font-semibold ">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span aria-hidden="true" className="absolute inset-0 " />
            {title}
          </a>
        </h3>
        <div className="flex items-center mt-2">
          <Star className="w-5 h-5 fill-primary text-primary mr-1 pt-1" />
          <span className="text-sm text-muted-foreground">{rating}</span>
        </div>
        <p className="text-sm font-medium text-gray-900 mt-2">${price}</p>
      </div>
      <div className="p-2  bg-slate-200">
        <Button
          type="button"
          onClick={(e) => handleAddToCart(e, productId)}
          className="bg-primary text-white rounded-md w-full hover:bg-primary-dark transition duration-200"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
