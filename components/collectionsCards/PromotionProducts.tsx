import React from "react";
import ProductsList from "./ProductsList";
import HeadingSections from "../landing/HeadingSections";

const PromotionProducts = ({
  currentProduct,
}: {
  currentProduct?: { id?: number };
}) => {
  return (
    <div className="mt-12">
      <HeadingSections
        title="Explore Products"
        description="From everyday hydration to premium mineral water, explore products made to refresh and revitalize."
        align="left"
      />
      <ProductsList excludeId={currentProduct?.id} />
    </div>
  );
};

export default PromotionProducts;
