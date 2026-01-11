import Image from "next/image";
import Navbar from "@/components/Navbar";
import Promotions from "@/components/landing/Promotions";
import HeroSection from "@/components/landing/HeroSection";
import Products from "@/components/landing/Products";
import ProductView from "@/components/landing/ProductView";
import ProductTest from "@/components/landing/ProductTest";
import FilterationProcess from "@/components/landing/FilterationProcess";
import About from "@/components/landing/About";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-0">
      <Navbar />
      <HeroSection />
      <About />
      {/* <ProductView /> */}
      <FilterationProcess />
      <ProductTest />
      {/* <Products /> */}
      <Promotions />
    </main>
  );
}
