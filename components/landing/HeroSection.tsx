"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen md:mt-10 w-full overflow-hidden">
      {/* WATER SPLASH BG IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/water-splash.png"
          alt="Water Splash"
          fill
          priority
          className="
            object-cover
            object-bottom
            opacity-100
          "
        />
      </div>

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 z-0 bg-blue-50" /> */}

      {/* BOTTOM SPLASH EFFECT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-2
          h-[45%]
          w-full
          bg-linear-to-t
          from-blue-500/30
          via-blue-400/10
          to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl text-[#152f3e]"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Nature's Pure Gift, <br />
            <span>Perfectly Packaged </span>
          </h1>

          <p className="mb-12 text-sm leading-relaxed md:text-xl">
            Clean, safe, and refreshing drinking water produced with advanced
            purification and sustainable practices.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <button
              onClick={() => router.push("/collections/all")}
              className="group relative flex items-center pl-5 py-2 pr-3 rounded-full bg-blue-600 text-white text-[18px] cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Explore Products</span>

              <span className="relative z-10 ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-500 transition-transform duration-300 group-hover:rotate-0 -rotate-45">
                <ArrowRight />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
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
    </main>
  );
}

export default HeroSection;
