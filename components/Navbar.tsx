"use client";
import React, { useState, useEffect } from "react";
import { motion, Transition } from "framer-motion";
import { useRouter } from "next/navigation";
import NavItem from "./ui/navItem";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springConfig: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
  };

  const navbarClass = isScrolled
    ? "bg-white/30 backdrop-blur-xl shadow-md"
    : "bg-transparent";

  const heightStyles = isScrolled ? "h-16" : "h-20";
  const brandcoloredStyles = "text-[var(--primary-color)]";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={springConfig}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-40">
        <div
          className={`relative flex items-center justify-center ${heightStyles}`}
        >
          <motion.div
            transition={springConfig}
            className="absolute left-0 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className={`text-2xl font-kavoon ${brandcoloredStyles}`}>
              AONEX
            </span>
          </motion.div>

          <div className="flex items-center space-x-12">
            <NavItem label="About Us" onClick={() => router.push("/aboutus")} />

            <NavItem
              label="Collections"
              onClick={() => router.push("/collections/all")}
            />

            <NavItem
              label="Contact Us"
              onClick={() => router.push("/contactus")}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
