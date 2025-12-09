import ProductBanner from "@/components/collectionsCards/ProductBanner";
import ProductsList from "@/components/collectionsCards/ProductsList";

function Collections() {
  return (
    <main className="flex mt-3 min-h-screen bg-white flex-col justify-between ">
      <ProductBanner />
      <ProductsList />
    </main>
  );
}

export default Collections;
