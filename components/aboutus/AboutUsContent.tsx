"use client";

import { motion, easeOut } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import Image from "next/image";
import PlantsSection from "./PlantSection";

const AboutUsContent = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };
  return (
    <div className="px-6 md:px-34 mt-16">
      {/* ABOUT US – START */}
      <motion.section
        className="relative w-full p-6 mb-12 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-neutral-900">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-cyan-500 font-medium text-sm tracking-wider uppercase">
                — Who We Are
              </span>
            </motion.div>

            <h2 className="text-2xl lg:text-4xl font-extrabold leading-tight mb-6 uppercase">
              Healthy Living Starts With{" "}
              <span className="text-blue-500">Pure Water</span>
            </h2>

            <p className="text-gray-500 font-medium text-lg mb-10 max-w-2xl">
              We are committed to delivering clean, safe, and refreshing
              drinking water that promotes healthier lifestyles. Through
              advanced purification processes and stringent quality checks, we
              ensure every bottle meets the highest standards. Our focus on
              sustainable practices means we care for both your health and the
              environment.
            </p>

            {/* MISSION & VISION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-4">
                {/* <Target className="text-blue-500 mt-1" size={28} /> */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
                  <p className="text-neutral-600">
                    To make safe, mineral-rich, and eco-friendly drinking water
                    accessible to every household and business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                {/* <Lightbulb className="text-blue-500 mt-1" size={40} /> */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
                  <p className="text-neutral-600">
                    To be the most trusted water brand, setting new standards in
                    purity, sustainability, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative w-full h-[400px] bg-neutral-200 rounded-xl overflow-hidden">
              <Image
                src="/images/promo-banner.png" // replace with your product image
                alt="Pure Water Product"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* plants sections*/}
      <motion.div
        className="mb-20 px-4 mt-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-cyan-500 font-medium text-sm tracking-wider uppercase">
            — Manufacture plants
          </span>
        </motion.div>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          OUR MANUFACTURING <span className="text-blue-500">PLANTS</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Every drop goes through a carefully designed process to ensure purity,
          safety, and freshness.
        </p>
      </motion.div>
      <PlantsSection />

      {/* teams */}
      <div>
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-cyan-500 font-medium text-sm tracking-wider uppercase">
            — Teams
          </span>
        </motion.div>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          MEET OUR <span className="text-blue-500">TEAMS</span>
        </h2>
        <motion.section
          className="relative w-full rounded-xl h-[600px] p-4 bg-neutral-200 mt-12 mb-12 text-white overflow-hidden flex flex-col md:flex-row items-stretch"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.section>
      </div>
    </div>
  );
};

export default AboutUsContent;
