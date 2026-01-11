"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";
import { Droplet } from "lucide-react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "AoneX Fresh Drinking Water",
    image: "",
    size: { value: 250, unit: "ML" },
    description: "Crystal clear purified water for daily hydration.",
  },
  {
    name: "AoneX Fresh Drinking Water",
    image: "",
    size: { value: 500, unit: "ML" },
    description: "Mineral-enriched water sourced from pristine springs.",
  },
  {
    name: "AoneX Fresh Drinking Water",
    image: "",
    size: { value: 1000, unit: "ML" },
    description: "Premium quality water for the whole family.",
  },
  {
    name: "AoneX Fresh Drinking Water",
    image: "",
    size: { value: 2000, unit: "ML" },
    description: "Large bottle perfect for offices and events.",
  },
];

const HorizontalProductCard = ({ product }: any) => {
  const [hovered, setHovered] = React.useState(false);
  const router = useRouter();
  const slug = `${product.name.toLowerCase().replace(/ /g, "-")}-${
    product.size.value
  }${product.size.unit.toLowerCase()}`;

  return (
    <div className="shrink-0 w-[420px]">
      {/* Image */}
      <div
        className="relative h-[520px] rounded-2xl bg-gray-100 overflow-hidden cursor-pointer flex items-center justify-center shadow-md hover:shadow-lg min-h-[400px] transition-shadow duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => router.push(`/collections/${slug}`)}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 self-center">
            <Droplet size={48} strokeWidth={1.5} />
            <span className="text-sm mt-2 font-medium">Aonex Waters</span>
          </div>
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-500"
          style={{ opacity: hovered ? 0.4 : 0 }}
        />

        {/* Description */}
        <div
          className="absolute bottom-0 inset-x-0 px-6 py-8 bg-linear-to-t from-black/90 to-transparent transition-all duration-500"
          style={{
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <p className="text-white text-sm leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-left">
        <div className="text-lg font-semibold text-gray-800">
          {product.size.value}
          {product.size.unit}
        </div>
        <div className="text-sm text-gray-500">{product.name}</div>
      </div>
    </div>
  );
};

const HorizontalSkeleton = () => (
  <div className="shrink-0 w-[420px] h-[520px] rounded-2xl bg-gray-200 animate-pulse" />
);

export default function ProductTest() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const scrollWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const endPadding = 140;
    const scrollDistance = scrollWidth - viewportWidth + endPadding;

    gsap.to(trackRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* Heading */}
      <motion.div
        className="px-30 mb-8 self-start text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-cyan-500 font-medium text-sm tracking-wider uppercase">
            — Products
          </span>
        </motion.div>
        <h2 className="text-4xl font-extrabold text-gray-900">
          OUR <span className="text-blue-500">COLLECTIONS</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Discover our best-selling bottled water pure, safe, and refreshing.
        </p>
      </motion.div>

      {/* Horizontal Scroll */}
      <section
        ref={sectionRef}
        className="relative w-full mb-16 overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex h-screen items-center gap-16 pl-30 pr-60"
        >
          {loading
            ? products.map((_, i) => <HorizontalSkeleton key={i} />)
            : products.map((product, i) => (
                <HorizontalProductCard key={i} product={product} />
              ))}
        </div>
      </section>
    </>
  );
}
