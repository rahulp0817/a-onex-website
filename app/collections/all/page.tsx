import ProductBanner from "@/components/collectionsCards/ProductBanner";
import ProductsList from "@/components/collectionsCards/ProductsList";
import Promotions from "@/components/landing/Promotions";
import React from "react";

function Collections() {
  return (
    <main className="flex min-h-screen bg-white flex-col justify-between ">
      <ProductBanner />
      <ProductsList />
    </main>
  );
}

export default Collections;
