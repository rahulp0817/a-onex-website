"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Droplet } from "lucide-react";
import { useRouter } from "next/navigation";

const ProductSkeleton = () => (
  <div className="rounded-xl overflow-hidden bg-white shadow-md">
    <div className="min-h-96 w-full bg-gray-200 animate-pulse"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
    </div>
  </div>
);

const ProductCard = ({ product, index }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const slug = `${product.name.toLowerCase().replace(/ /g, "-")}-${
    product.size.value
  }${product.size.unit.toLowerCase()}`;

  return (
    <div
      className="rounded-xl bg-white transition-all duration-500 ease-out cursor-pointer"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(0.95)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/collections/${slug}`)}
    >
      {/* Image Section */}
      <div className="relative flex items-center justify-center shadow-md hover:shadow-lg min-h-[400px] bg-gray-100 rounded-xl overflow-hidden transition-shadow duration-300">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 ease-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <Droplet size={48} strokeWidth={1.5} />
            <span className="text-sm mt-2 font-medium">Aonex Waters</span>
          </div>
        )}

        <div
          className="absolute inset-0 bg-black transition-opacity duration-500 ease-out pointer-events-none"
          style={{
            opacity: isHovered ? 0.4 : 0,
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 to-transparent px-4 py-8 transition-all duration-500 ease-out"
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <p className="text-white text-sm leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 mt-2 flex flex-col">
        <div className="text-lg font-semibold text-gray-800">
          {product?.size?.value}
          {product?.size?.unit}
        </div>
      </div>
    </div>
  );
};

const ProductsList = ({ limit }: { limit?: number }) => {
  const [loading, setLoading] = useState(true);

  const products = useMemo(
    () => [
      {
        name: "AoneX Fresh Drinking Water with Added Minerals",
        image: "",
        size: {
          value: 250,
          unit: "ML",
        },
        description:
          "Crystal clear purified water, perfect for daily hydration and healthy living.",
      },
      {
        name: "AoneX Fresh Drinking Water with Added Minerals",
        image: "",
        size: {
          value: 500,
          unit: "ML",
        },
        description:
          "Rich in natural minerals, sourced from pristine springs for optimal wellness.",
      },
      {
        name: "AoneX Fresh Drinking Water with Added Minerals",
        image: "",
        size: {
          value: 1000,
          unit: "ML",
        },
        description:
          "Premium quality water with enhanced minerals for your family's health.",
      },
      {
        name: "AoneX Fresh Drinking Water with Added Minerals",
        image: "",
        size: {
          value: 2000,
          unit: "ML",
        },
        description:
          "Large capacity bottle ideal for offices, events, and family gatherings.",
      },
    ],
    []
  );

  const displayedProducts = limit ? products.slice(0, limit) : products;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10 md:px-20 lg:px-40 py-16">
        {[...Array(displayedProducts.length)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 md:px-20 lg:px-40 py-16 ">
      {displayedProducts.map((product, index) => (
        <ProductCard key={index} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductsList;
