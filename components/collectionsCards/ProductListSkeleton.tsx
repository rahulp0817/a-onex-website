import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="border w-72 h-80 flex flex-col items-center justify-between rounded-xl shadow-md p-4 bg-white animate-pulse">
      <div className="h-48 w-full bg-gray-200 rounded-md"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mt-3"></div>
      <div className="flex gap-2 mt-4 w-full justify-center">
        <div className="h-6 w-12 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-12 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-12 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
