import React from "react";
import { motion } from "framer-motion";

interface HeadingSectionsProps {
  title: string;
  description: string;
  align?: "left" | "right";
}

const HeadingSections = ({
  title,
  description,
  align = "right",
}: HeadingSectionsProps) => {
  const isRight = align === "right";

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        // cast ease tuple to any to satisfy framer-motion's TypeScript types
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const lineAnimation = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        // cast ease tuple to any to satisfy framer-motion's TypeScript types
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <motion.section
      className="w-full py-24 md:mb-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`
          flex flex-col gap-8
          md:items-center
          ${isRight ? "md:flex-row" : "md:flex-row-reverse"}
        `}
      >
        {/* DESCRIPTION */}
        <motion.div
          variants={fadeUp}
          className="flex-1"
        >
          <p className="max-w-md text-md leading-relaxed text-[#5f736d]">
            {description}
          </p>
        </motion.div>

        {/* CENTER LINE */}
        <motion.div
          variants={lineAnimation}
          className="hidden flex-1 items-center justify-center md:flex origin-center"
        >
          <div className="relative w-full">
            <div className="h-[1.5px] w-full bg-[#d7e0dc]" />

            {/* LEFT DOT */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#c7d3cf]"
            />

            {/* RIGHT DOT */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#c7d3cf]"
            />
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className={`flex-1 ${isRight ? "md:pl-8" : "md:pr-8"}`}
        >
          <h2
            className={`
              text-3xl
              font-bold
              leading-none
              tracking-tight
              text-[#152f3e]
              md:text-5xl
              ${isRight ? "md:text-right" : "md:text-left"}
            `}
          >
            {title}
          </h2>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeadingSections;