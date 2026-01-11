import React from "react";

const ProductBanner = ({ name }: any) => {
  return (
    <div className="bg-(--primary-color) h-60 mb-12 flex items-center shadow-md px-30">
      <h1 className="text-green-400 text-4xl font-bold">{name}</h1>
    </div>
  );
};

export default ProductBanner;
