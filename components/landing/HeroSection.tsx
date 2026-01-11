"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://www.shutterstock.com/shutterstock/videos/1035993590/thumb/1.jpg?ip=x480"
      >
        <source
          src="https://www.shutterstock.com/shutterstock/videos/1035993590/preview/stock-footage-bottling-plant-water-bottling-line.webm"
          type="video/webm"
        />
        <source
          src="https://www.shutterstock.com/shutterstock/videos/1035993590/preview/stock-footage-bottling-plant-water-bottling-line.mp4"
          type="video/mp4"
        />
      </video>

      {/* BLUE OVERLAY */}
      <div className="absolute inset-0 bg-blue-900/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-30">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Pure Water <br />
            <span className="text-blue-300">For a Healthier Life</span>
          </h1>

          <p className="text-sm md:text-xl text-white mb-12 leading-relaxed">
            Clean, safe, and refreshing drinking water produced with advanced
            purification and sustainable practices.
          </p>

          <button
            onClick={() => router.push("/collections/all")}
            className="group bg-blue-500 hover:bg-blue-600 transition-colors duration-300 px-5 py-3 rounded-full text-white text-lg font-medium shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Explore Products
            <ArrowRight
              size={26}
              className="
      -rotate-45
      transition-transform
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:rotate-0
      group-hover:translate-x-1
    "
            />
          </button>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
