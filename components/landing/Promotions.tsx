"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import Image from "next/image";

const Promotions = () => {
  const image = "/images/promo-banner.png"; // <-- your image path

  return (
    <motion.section
      className="relative w-full p-4 bg-[#008000] mb-24 text-white overflow-hidden flex flex-col md:flex-row items-stretch"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Image Section (40%) */}
      <div className="relative w-full rounded-xl md:w-[50%] h-[300px] md:h-[500px]">
        {!image ? (
          <Image
            src={image}
            alt="Join as Dealer"
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="flex flex-col rounded-xl items-center justify-center w-full h-full bg-gray-300 text-gray-600">
            <Gift size={80} />
            <p className="mt-2 text-lg font-semibold">No Promotion Image</p>
          </div>
        )}
      </div>

      {/* Right Text Section (60%) */}
      <div className="relative w-full md:w-[60%] flex items-center justify-center px-8 md:px-16 py-10 text-center md:text-left">
        <motion.div
          className="space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide">
            DRINK <span className="text-yellow-300">HEALTHY</span>
          </h2>

          <p className="text-lg font-medium leading-relaxed">
            BUY A-ONE PRODUCTS AND EARN EXCLUSIVE DISCOUNTS EVERY TIME YOU SHOP.
          </p>

          <motion.a
            href="/products"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE PRODUCTS
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Promotions;
