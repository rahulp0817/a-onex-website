"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeadingSections from "./HeadingSections";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-24 bg-[#f7fbff] relative">
      <HeadingSections
        title="Our Perspective"
        description="Meticulously crafted product to keep people hydrated, ready and equipped for whatever they’re into."
        align="left"
      />
      <div className="inset-0 opacity-[0.09]">
        <Image src="/water-splash.png" alt="bg" fill className="object-cover" />
      </div>
      <div className="inset-0 opacity-[0.08]">
        <Image
          src="/splash-glass.png"
          alt="bg"
          fill
          className="object-contain object-right"
        />
      </div>
      <section className="mb-8 flex py-8 flex-col items-center justify-center relative overflow-hidden  px-0">
        {/* SOFT GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-b from-white/40 to-transparent" />
        <div className="relative z-10 mx-auto">
          {/* TOP CONTENT */}
          <div className="grid gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="max-w-xl text-3xl font-bold leading-[1.05] tracking-tight text-[#145c4c] md:text-4xl">
                Pure Hydration Crafted With Purpose.
              </h2>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col justify-between"
            >
              <p className="max-w-2xl text-lg leading-relaxed text-[#475569] md:text-2xl">
                Aone represents a thoughtful approach to bottled water,
                combining purity, sustainability, and modern packaging
                innovation. Every bottle is designed to deliver refreshing
                hydration while maintaining the highest standards of quality and
                environmental responsibility.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Link
                  href="/aboutus"
                  className="group relative flex items-center pl-5 py-2 pr-3 rounded-full bg-blue-600 text-white text-[18px] cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10">Learn more</span>

                  <span className="relative z-10 ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-500 transition-transform duration-300 group-hover:rotate-0 -rotate-45">
                    <ArrowRight />
                  </span>
                </Link>
              </motion.div>
              {/* STATS */}
              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {[
                  {
                    number: "50+",
                    label: "Distribution Cities",
                  },
                  {
                    number: "1M+",
                    label: "Bottles Delivered",
                  },
                  {
                    number: "100%",
                    label: "Purified & Safe",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="
                rounded-2xl
                bg-white/70
                backdrop-blur-md
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              "
                  >
                    <h3 className="text-2xl font-bold text-[#145c4c]">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-md text-[#475569]">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,32.17,158,28,
            70.36-5.37,136.33-33.31,206.8-37.5C438.64,
            32.43,512.34,53.67,583,72.05c69.27,18,
            138.3,24.88,209.4,13.08,36.15-6,
            69.85-17.84,104.45-29.34C989.49,25,
            1113-14.29,1200,52.47V120H0Z"
            className="fill-white"
          />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,32.17,158,28,
      70.36-5.37,136.33-33.31,206.8-37.5C438.64,
      32.43,512.34,53.67,583,72.05c69.27,18,
      138.3,24.88,209.4,13.08,36.15-6,
      69.85-17.84,104.45-29.34C989.49,25,
      1113-14.29,1200,52.47V120H0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </main>
  );
}
