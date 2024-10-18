import React from "react";

const ShimmerCard = () => {
  return (
    <div className="flex flex-col h-full w-72 group relative border border-gray-300 rounded-md shadow-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 animate-pulse">
        <div className="h-full w-full bg-gray-300"></div>
      </div>
      <div className="mt-2 flex-grow p-2">
        <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="flex items-center mt-2">
          <div className="h-5 w-5 bg-gray-300 rounded mr-1 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded mt-2 animate-pulse"></div>
      </div>
      <div className="p-2">
        <div className="h-10 bg-primary rounded-md w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
