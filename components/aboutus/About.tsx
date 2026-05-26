import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full py-24 pl-6 md:mb-6 overflow-hidden">
      {/* about */}
      <div>
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
                About Us
              </p>
            </div>

            <h2 className="max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#152f3e] md:text-6xl">
              Crafted with <span className="text-[#bdbdbd]">Purity</span>
              <br />
              <span className="text-[#bdbdbd]">Driven by Trust</span>
            </h2>
          </div>
        </motion.div>

        <div className="items-start gap-12 lg:flex-row lg:items-start">
          {/* TEXT */}
          <div className="w-full lg:w-full text-left">
            <p className="max-w-none text-md leading-relaxed text-[#5f736d]">
              At A-OneX, we are more than just a bottled water company; we are a
              commitment to purity, sustainability, and community. Our journey
              began with a simple vision: to provide the purest, most refreshing
              water while minimizing our environmental impact.
              <br />
              <br />
              We source our water from pristine natural springs, ensuring that
              every drop is packed with essential minerals and free from
              contaminants. Our state-of-the-art filtration process guarantees
              that our water meets the highest quality standards, delivering a
              crisp and refreshing taste in every bottle.
            </p>
          </div>

          {/* BENTO GRID */}
          <div
            className="
    mt-14
    grid
    grid-cols-1
    gap-4
    md:grid-cols-4
    md:grid-rows-2
  "
          >
            {/* LARGE IMAGE */}
            <div
              className="
      relative
      overflow-hidden
      rounded-2xl
      md:col-span-2
      md:row-span-2
      h-[520px]
    "
            >
              <Image
                src="/image-promotion.png"
                alt="A-OneX"
                fill
                className="
        object-cover
        transition-transform
        duration-700
        hover:scale-105
      "
              />
            </div>

            {/* TOP RIGHT */}
            <div
              className="
      relative
      overflow-hidden
      rounded-2xl
      h-[250px]
    "
            >
              <Image
                src="/image-promotion.png"
                alt="Purity"
                fill
                className="
        object-cover
        transition-transform
        duration-700
        hover:scale-105
      "
              />
            </div>

            {/* TOP FAR RIGHT */}
            <div
              className="
      relative
      overflow-hidden
      rounded-2xl
      h-[250px]
    "
            >
              <Image
                src="/image-promotion.png"
                alt="Freshness"
                fill
                className="
        object-cover
        transition-transform
        duration-700
        hover:scale-105
      "
              />
            </div>

            {/* BOTTOM WIDE */}
            <div
              className="
      relative
      overflow-hidden
      rounded-2xl
      md:col-span-2
      h-[250px]
    "
            >
              <Image
                src="/image-promotion.png"
                alt="Nature"
                fill
                className="
        object-cover
        transition-transform
        duration-700
        hover:scale-105
      "
              />
            </div>
          </div>
        </div>
      </div>

      {/* story */}
      <div className="mt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
    mb-20
    flex
    flex-col
    items-center
    justify-center
    text-center
  "
        >
          <div className="mb-5 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#6d8b7d]" />

            <p className=" text-sm font-medium tracking-wide uppercase text-[#1b1b1b]">
              story
            </p>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[0.95 tracking-tight text-[#152f3e] md:text-6xl">
            From small beginnings to a story built{" "}
            <span className="text-[#bdbdbd]">on purity and trust</span>
          </h2>
        </motion.div>
        <div
          className="
    max-w-4xl
    h-[450px]
    rounded-2xl
    border
    border-[#d9d9d9]
    bg-white/60
    p-8
    shadow-sm
    backdrop-blur-md
    items-center
    justify-center
    text-center
    mx-auto
  "
        >
          Your Content Here
        </div>
      </div>
    </section>
  );
};

export default About;
