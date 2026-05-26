"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/bottle.png",
  "/bottle.png",
  "/images/bottle-3.jpg",
  "/images/bottle-4.jpg",
  "/images/bottle-5.jpg",
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => mod(prev + 1, slides.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => mod(prev + 1, slides.length));
  };

  const prevSlide = () => {
    setCurrent((prev) => mod(prev - 1, slides.length));
  };

  return (
    <section className="w-full overflow-hidden bg-[#f6f7f4] py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* TOP */}
        <div className="mb-16 flex items-start justify-between">
          <div>
            <p className="text-xl font-medium text-[#145c4c]">
              Built for every Adventure
            </p>

            <h2
              className="
                mt-2
                text-5xl
                font-bold
                leading-none
                tracking-tight
                text-[#145c4c]
                md:text-8xl
              "
            >
              Crafted with Purpose
            </h2>
          </div>

          {/* EXPLORE */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              hidden
              md:flex
              rounded-full
              bg-[#145c4c]
              px-10
              py-5
              text-xl
              font-semibold
              text-white
              shadow-xl
            "
          >
            Explore
          </motion.button>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <div
            className="
              relative
              flex
              items-center
              justify-center
              gap-10
              py-10
            "
          >
            {slides.map((slide, index) => {
              const position = mod(
                index - current,
                slides.length
              );

              // SHOW ONLY 3
              if (
                position !== 0 &&
                position !== 1 &&
                position !== slides.length - 1
              ) {
                return null;
              }

              let styles = "";

              // LEFT CARD
              if (position === slides.length - 1) {
                styles = `
                  w-[22%]
                  h-[480px]
                  translate-y-[-80px]
                  opacity-90
                  scale-[0.92]
                  z-10
                `;
              }

              // CENTER CARD
              if (position === 0) {
                styles = `
                  w-[42%]
                  h-[720px]
                  z-30
                `;
              }

              // RIGHT CARD
              if (position === 1) {
                styles = `
                  w-[22%]
                  h-[480px]
                  translate-y-[80px]
                  opacity-90
                  scale-[0.92]
                  z-10
                `;
              }

              return (
                <motion.div
                  key={index}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  onClick={() => setCurrent(index)}
                  className={`
                    relative
                    overflow-hidden
                    rounded-[36px]
                    bg-white
                    shadow-md
                    cursor-pointer
                    transition-all
                    duration-700
                    ${styles}
                  `}
                >
                  <Image
                    src={slide}
                    alt="Product"
                    fill
                    className="
                      object-cover
                    "
                  />

                  {/* SOFT OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-black/10
                      via-transparent
                      to-transparent
                    "
                  />
                </motion.div>
              );
            })}
          </div>

          {/* NAVIGATION */}
          <div className="mt-12 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#145c4c]
                shadow-md
              "
            >
              <ArrowLeft size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#145c4c]
                text-white
                shadow-xl
              "
            >
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}