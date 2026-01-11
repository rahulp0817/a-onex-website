"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, easeOut } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Sourcing",
    description:
      "We source water only from trusted and safe locations. Every drop starts its journey from a clean and reliable foundation.",
    img: "/images/sourcing.png",
  },
  {
    id: "02",
    title: "Filtration",
    description:
      "Multi-layer filtration removes sediments, particles, and impurities while retaining water’s natural essence.",
    img: "/images/filtration.png",
  },
  {
    id: "03",
    title: "Purification",
    description:
      "Advanced RO and UV treatments eliminate bacteria, viruses, and harmful contaminants.",
    img: "/images/purification.png",
  },
  {
    id: "04",
    title: "Mineral Balance",
    description:
      "Essential minerals are balanced to enhance taste and maintain long-term health benefits.",
    img: "/images/mineral_balance.png",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

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
    <section ref={containerRef} className="relative mx-24 py-32">
      <motion.div
        className="mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-cyan-500 font-medium text-sm tracking-wider uppercase">
            — Purification Process
          </span>
        </motion.div>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          OUR PURIFICATION <span className="text-blue-500">PROCESS</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Every drop goes through a carefully designed process to ensure purity,
          safety, and freshness.
        </p>
      </motion.div>
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

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                {step.title}
              </h3>

              <p className="mt-4 text-lg font-medium text-gray-500 max-w-xl">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="sticky top-32 h-[520px] flex items-center justify-center bg-neutral-100 rounded-lg overflow-hidden shadow-lg">
          <motion.img
            key={steps[activeIndex].img}
            src={steps[activeIndex].img}
            alt={steps[activeIndex].title}
            className="h-full w-full object-contain"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}
