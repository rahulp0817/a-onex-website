"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, easeOut } from "framer-motion";
import HeadingSections from "./HeadingSections";

const steps = [
  {
    id: "01",
    title: "Sourcing",
    description:
      "We source water only from trusted and safe locations. Every drop starts its journey from a clean and reliable foundation.",
    img: "image-promotion.png",
  },
  {
    id: "02",
    title: "Filtration",
    description:
      "Multi-layer filtration removes sediments, particles, and impurities while retaining water’s natural essence.",
    img: "splash-glass.png",
  },
  {
    id: "03",
    title: "Purification",
    description:
      "Advanced RO and UV treatments eliminate bacteria, viruses, and harmful contaminants.",
    img: "image-promotion.png",
  },
  {
    id: "04",
    title: "Mineral Balance",
    description:
      "Essential minerals are balanced to enhance taste and maintain long-term health benefits.",
    img: "splash-glass.png",
  },
];

export default function FiltrationProcessSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Convert scroll progress to step index
  scrollYProgress.on("change", (latest) => {
    const step = Math.min(steps.length - 1, Math.floor(latest * steps.length));
    setActiveIndex(step);
  });

  return (
    <section ref={containerRef} className="relative mx-24 py-3 mb-8">
      <HeadingSections
        title="Our Purification Process"
        description="Every drop goes through a carefully designed process to ensure purity, safety, and freshness."
        align="left"
      />
      <div className="grid grid-cols-2 gap-28">
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="mb-40"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.3,
              }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-blue-600 font-semibold text-sm">
                STEP {step.id}
              </span>

              <h3 className="mt-4 text-3xl text-[#152f3e] font-bold leading-tight">
                {step.title}
              </h3>

              <p className="mt-4 text-lg font-medium text-gray-500 max-w-xl">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="sticky top-32 h-[500px] flex items-center justify-center rounded-lg overflow-hidden bg-transparent">
          <motion.img
            key={steps[activeIndex].img}
            src={steps[activeIndex].img}
            alt={steps[activeIndex].title}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}
