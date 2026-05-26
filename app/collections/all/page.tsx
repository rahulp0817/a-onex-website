import HeadingBanner from "@/components/HeadingBanner";
import ProductsList from "@/components/collectionsCards/ProductsList";
import Promotion from "@/components/landing/Promotions";

function Collections() {
  return (
    <main className="flex mt-3 min-h-screen flex-col justify-between ">
      <HeadingBanner
        name="Our Collections"
        description="Explore our premium collection of purified water products crafted for freshness, purity, and modern lifestyles."
      />
      <div className="w-full px-6 py-16 lg:px-24">
        <ProductsList />
      </div>
      <Promotion />
    </main>
  );
}

export default Collections;

// purification page -> different process -> wave sections
// delay in card animations
// why to choose A-one
