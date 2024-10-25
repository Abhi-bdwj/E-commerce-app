import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {
    title,
    price,
    rating,
    image,
    productId,
    availabilityStatus,
    product,
  } = props;

  return (
    <div key={productId} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none group-hover:opacity-70 lg:h-80">
        <img
          alt={title}
          src={image}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/productdetailpage/${product.id}`} state={{ product }}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      <div className="flex justify-between pt-1">
        <p className="mt-1 text-sm text-gray-500">★{rating}</p>
        <p className="text-sm font-medium text-gray-900">
          {availabilityStatus}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
