"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

const plants = [
  {
    title: "Unit 1 Manufacturing Plant",
    description:
      "Our primary manufacturing unit is equipped with advanced purification systems, automated bottling lines, and strict quality controls to ensure safe and reliable water production.",
    image: "/api/placeholder/800/600",
    location: "Plot No Q3, 1st Stage Kapnoor Industrial Estate, Kalaburagi, Karnataka",
  },
  {
    title: "Unit 2 Manufacturing Plant",
    description:
      "This facility focuses on sustainable operations, water conservation, and eco-friendly packaging, reducing environmental impact while maintaining premium quality.",
    image: "/api/placeholder/800/600",
    location: "Plot No 305, P1 & P2 Sy No 58 Nandur K, Shahbad Road, Nandur Kesaratgi Industrial Area, KIADB, Karnataka",
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
    <section className="w-full py-16 pl-6 rounded-xl mb-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
      >
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#6d8b7d]" />
              <p className="text-sm font-medium uppercase tracking-wide text-[#1b1b1b]">
                Our Manufacturing Plants
              </p>
            </div>

            <h2 className="max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#152f3e] md:text-6xl">
              {/* font-black */}
              The Journey <span className="text-[#bdbdbd]">of</span>
              <br />
              <span className="text-[#bdbdbd]">Every Drop</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ x: 4 }}
            className="group relative mt-4 flex items-center gap-3 text-sm font-medium cursor-pointer text-[#111]"
          >
            Visit Our Plant
            <span className="relative flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 transition-transform duration-300 group-hover:rotate-0 -rotate-45 border border-[#d9d9d9]">
              <ArrowRight />
            </span>
          </motion.button>
        </div>
      </motion.div>
      <div className="max-w-8xl mx-auto space-y-24">
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
                } relative h-[420px] rounded-3xl overflow-hidden border`}
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
                <h3 className="text-3xl font-bold text-[#152f3e] mb-6">
                  {plant.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {plant.description}
                </p>

                <p className="text-lg font-medium mt-4 hover:text-blue-500 cursor-pointer text-gray-800 leading-relaxed">
                  <MapPin size={20} className="inline-block mr-2 text-black" />
                  {plant.location}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlantsSection;
