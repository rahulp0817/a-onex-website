"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const plants = [
  {
    title: "Unit Manufacturing Plant",
    description:
      "Our primary manufacturing unit is equipped with advanced purification systems, automated bottling lines, and strict quality controls to ensure safe and reliable water production.",
    image: "/api/placeholder/800/600",
  },
  {
    title: "Eco-Friendly Manufacturing Plant",
    description:
      "This facility focuses on sustainable operations, water conservation, and eco-friendly packaging, reducing environmental impact while maintaining premium quality.",
    image: "/api/placeholder/800/600",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const PlantsSection = () => {
  return (
    <section className="w-full py-16 bg-slate-50 rounded-xl mb-32">
      <div className="max-w-8xl mx-auto px-6 lg:px-20 space-y-24">
        {plants.map((plant, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <motion.div
                variants={isEven ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`${
                  isEven ? "order-1" : "order-2"
                } relative h-[420px] rounded-3xl overflow-hidden shadow-xl`}
              >
                <Image
                  src={plant.image}
                  alt={plant.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                variants={isEven ? fadeRight : fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`${isEven ? "order-2" : "order-1"}`}
              >
                <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
                  {plant.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {plant.description}
                </p>

                {/* Decorative line */}
                <div className="mt-8 h-1 w-24 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlantsSection;
