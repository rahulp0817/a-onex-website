"use client";
import React from "react";
import HeadingSections from "./HeadingSections";
import { motion } from "framer-motion";
import ProductsList from "../collectionsCards/ProductsList";

const Collections = () => {
  return (
    <div className="w-full px-24 mb-0 h-screen flex flex-col items-center justify-center">
      <HeadingSections
        title="Our Collections"
        description="Meticulously crafted product to keep people hydrated, ready and equipped for whatever they’re into."
        align="right"
      />
      <motion.div
        className="w-full px-0 md:px-16 lg:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <ProductsList limit={4} />
      </motion.div>
    </div>
  );
};

export default Collections;
