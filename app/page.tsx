import Image from "next/image";
import Navbar from "@/components/Navbar";
import Promotions from "@/components/landing/Promotions";
import HeroSection from "@/components/landing/HeroSection";
import FilterationProcess from "@/components/landing/FilterationProcess";
import About from "@/components/landing/About";
import Collections from "@/components/landing/Collections";
import DistributerCarousel from "@/components/landing/DistributerCarousel";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-0">
      <Navbar />
      <HeroSection />
      <Features />
      <About />
      <Collections />
      <FilterationProcess />
      {/* <ProductTest /> .....*/}
      {/* <Products /> */}
      {/* <DistributerCarousel /> */}
      <Promotions />
    </main>
  );
}
