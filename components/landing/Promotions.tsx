"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Promotion() {
  return (
    <section className="w-full px-6 py-32 lg:px-24">
      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          bg-[#1495eb]
        "
      >
        {/* GLASS SPLASH BG */}
        <div className="absolute inset-0 opacity-[0.12]">
          <Image
            src="/promotion-water-splash.png"
            alt="bg"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 grid items-center lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="px-8 py-4 lg:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                max-w-3xl
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                md:text-4xl
              "
            >
              Pure Water, Just a Click Away
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-relaxed
                text-white/90
                md:text-[16px]
              "
            >
              Pure, safe, and refreshing drinking water crafted for your
              well-being. Every drop is purified with advanced technology and
              packaged with care. Choose from a wide range of packs designed to
              fit your daily needs. Experience the difference of trusted
              hydration, anytime and anywhere.
            </motion.p>

            {/* BUTTON */}
            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                group
                mt-12
                flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-4
                text-lg
                font-medium
                text-[#1495eb]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Enquire Now

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight />
              </span>
            </motion.button> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => {}}
                className="group relative flex items-center pl-5 py-2 pr-3 rounded-full bg-white text-[#1495eb] text-[16px] cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 font-medium">Enquire Now</span>

                <span className="relative z-10 ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#1495eb] text-white transition-transform duration-300 group-hover:rotate-0 -rotate-45">
                  <ArrowRight />
                </span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[450px]"
          >
            <Image
              src="/image-promotion.png"
              alt="Water Products"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
