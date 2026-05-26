"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Droplets, FlaskConical, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const featuresLeft = [
  {
    icon: Droplets,
    title: "Carbon Filters",
    description:
      "We carefully source water from pristine springs or deep aquifers, ensuring it retains its natural purity and mineral-rich composition.",
  },
  {
    icon: FlaskConical,
    title: "Ozone Tanks",
    description:
      "Our fully automated bottling process ensures the water is sealed in sterilized, eco-friendly bottles, preserving freshness.",
  },
];

const featuresRight = [
  {
    icon: Sparkles,
    title: "UV Light",
    description:
      "The water undergoes advanced filtration while preserving its natural essence. Added minerals enhance taste and health.",
  },
  {
    icon: ShieldCheck,
    title: "Micron Filtration",
    description:
      "Bottles are securely packed and distributed, ensuring they reach you fresh and ready to hydrate your life.",
  },
];

type Line = { d: string; dotX: number; dotY: number };

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  function computeLines() {
    if (!gridRef.current || !bottleRef.current) return;
    const gRect = gridRef.current.getBoundingClientRect();
    const bRect = bottleRef.current.getBoundingClientRect();

    const bottleCy = bRect.top - gRect.top + bRect.height / 2;
    const bottleL = bRect.left - gRect.left + 24; // left edge touch point
    const bottleR = bRect.right - gRect.left - 24; // right edge touch point

    const newLines: Line[] = cardRefs.current.map((card, i) => {
      if (!card) return { d: "", dotX: 0, dotY: 0 };
      const r = card.getBoundingClientRect();
      const cy = r.top - gRect.top + r.height / 2;
      const isL = i < 2;
      const yOff = i % 2 === 0 ? -70 : 70;

      let x1: number, y1: number, x2: number, y2: number;
      if (isL) {
        x1 = r.right - gRect.left;
        y1 = cy;
        x2 = bottleL;
        y2 = bottleCy + yOff;
      } else {
        x1 = r.left - gRect.left;
        y1 = cy;
        x2 = bottleR;
        y2 = bottleCy + yOff;
      }

      const mx = (x1 + x2) / 2;
      const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
      return { d, dotX: x2, dotY: y2 };
    });

    setLines(newLines);
  }

  useEffect(() => {
    const t = setTimeout(computeLines, 100);
    window.addEventListener("resize", computeLines);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", computeLines);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold tracking-tight text-[#152f3e]">
            How We Deliver Freshness
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            Sustainably sourced and expertly crafted, bringing natural freshness
            straight to you.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          ref={gridRef}
          className="relative grid items-center lg:grid-cols-[1fr_300px_1fr] gap-0"
        >
          {/* SVG CONNECTOR LAYER */}
          {/* <svg
            className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
            style={{ zIndex: 1 }}
          >
            {lines.map((line, i) => (
              <g key={i}>
                <path
                  d={line.d}
                  stroke="#d0cef0"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  fill="none"
                />
                <circle
                  cx={line.dotX}
                  cy={line.dotY}
                  r="6"
                  fill="#1f1971"
                  stroke="#d6d0ff"
                  strokeWidth="3"
                />
              </g>
            ))}
          </svg> */}

          {/* LEFT FEATURES */}
          <div className="space-y-40 relative z-10">
            {featuresLeft.map((item, i) => (
              <FeatureCard
                key={i}
                item={item}
                align="left"
                delay={i * 0.2}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
              />
            ))}
          </div>

          {/* CENTER BOTTLE */}
          <div
            className="relative flex items-center justify-center z-10"
            ref={bottleRef}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/bottle.png"
                alt="Bottle"
                width={260}
                height={600}
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-40 relative z-10">
            {featuresRight.map((item, i) => (
              <FeatureCard
                key={i}
                item={item}
                align="right"
                delay={i * 0.2}
                ref={(el) => {
                  cardRefs.current[i + 2] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { forwardRef } from "react";

const FeatureCard = forwardRef<
  HTMLDivElement,
  { item: any; align: "left" | "right"; delay: number }
>(({ item, align, delay }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative rounded-3xl border border-[#e8e8f0] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      {/* connector dot on card edge */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1f1971] border-[3px] border-[#d6d0ff] z-20
            ${align === "left" ? "-right-[7px]" : "-left-[7px]"}`}
      />

      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 min-w-12 rounded-full border-[1.5px] border-[#4352a3] flex items-center justify-center text-[#1f1971]">
          <item.icon size={22} strokeWidth={1.8} />
        </div>
        <div>
          <h3 className="text-[17px] font-700 text-[#1f1971] mb-1.5">
            {item.title}
          </h3>
          <p className="text-[13px] text-gray-500 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
});
FeatureCard.displayName = "FeatureCard";
