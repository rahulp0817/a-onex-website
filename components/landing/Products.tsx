"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ProductsList from "../collectionsCards/ProductsList";

const Products = () => {
  const router = useRouter();

  return (
    <motion.section
      className="relative w-full h-screen bg-white justify-center overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <motion.div
        className="mb-8 px-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          OUR COLLECTIONS
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Discover our best-selling bottled water pure, safe, and refreshing.
        </p>
      </motion.div>

      {/* Product Cards (limit to 4) */}
      <motion.div
        className="w-full px-0 md:px-16 lg:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <ProductsList limit={4} />
      </motion.div>

      {/* View All Button */}
      {/* <motion.div
        className="mt-1 flex mx-40 justify-end"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onPress={() => router.push("/collections/all")}
          className="bg-green-600 hover:bg-green-700 text-black font-semibold px-8 py-4 rounded-full shadow-lg"
        >
          View All Collections
        </Button>
      </motion.div> */}
    </motion.section>
  );
};

export default Products;
