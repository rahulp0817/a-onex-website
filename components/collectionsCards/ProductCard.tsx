"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductCard = ({ product, index }: any) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const slug = `${product.name.toLowerCase().replace(/ /g, "-")}-${product.size.value}${product.size.unit}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => router.push(`/collections/${slug}`)}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#d8d8d8]  transition-all duration-500"
    >
      {/* TOP RIGHT ARROW BUTTON */}
      <motion.div
        animate={{ rotate: isHovered ? 45 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] text-white"
      >
        <ArrowUpRight size={16} />
      </motion.div>

      {/* CARD BODY — row layout */}
      <div className="relative flex h-[420px] items-stretch">
        {/* LEFT — vertical product name */}
        <div className="flex w-[46px] min-w-[46px] items-start justify-center px-2 py-6">
          <h2
            className="text-[26px] font-bold uppercase tracking-tight text-[#111]"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              lineHeight: 1,
            }}
          >
            {product.size.value}
            {product.size.unit}
          </h2>
        </div>

        {/* RIGHT — image + description + buy */}
        <div className="flex flex-1 flex-col items-center justify-between py-5 pr-4 pl-1">
          {/* PRODUCT IMAGE */}
          <motion.div
            animate={{ y: isHovered ? -8 : 0, scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-1 items-center justify-center w-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-[220px] w-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* DESCRIPTION + BUY */}
          <motion.div
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex"
          >
            <p className="text-[14px] leading-relaxed font-mono text-[#2c333a]">
              {product.description ||
                "Introducing our revolutionary water bottle that keeps you hydrated throughout the day."}
            </p>

            {/* <div className="mt-3 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full bg-[#111827] px-5 py-2 text-[11px] font-bold tracking-widest text-white"
              >
                BUY
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* HOVER GLOW */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_60%)]"
      />
    </motion.div>
  );
};

export default ProductCard;
