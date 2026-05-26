import React from "react";
import { motion } from "framer-motion";

const VisonSection = () => {
  return (
    <section className="w-full py-24 pl-6 md:mb-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
      >
        <div>
          <div className="mb-5 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#6d8b7d]" />
            <p className="text-sm font-medium uppercase tracking-wide text-[#1b1b1b]">
              our mission/vision
            </p>
          </div>

          <h2 className="max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#152f3e] md:text-6xl">
            Driven by <span className="text-[#bdbdbd]">purpose</span>
            <br />
            <span className="text-[#bdbdbd]">guided by vision</span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default VisonSection;
