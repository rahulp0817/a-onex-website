"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavItem from "./ui/navItem";

const NavbarGlobal = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
  };

  const navbarStyles = {
    backgroundColor: isScrolled ? "white" : "transparent",
    boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
  };

  const heightStyles = isScrolled ? "h-16" : "h-20";
  const brandcoloredStyles = "text-[var(--primary-color)]";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={springConfig}
      style={navbarStyles}
      className="fixed top-0 w-full z-50 transition-all duration-300"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-40 bg-white">
        <div
          className={`relative flex items-center justify-center ${heightStyles}`}
        >
          {/* Brand Logo */}
          <motion.div
            transition={springConfig}
            className="absolute left-0 cursor-pointer"
          >
            <Link href="/">
              <span className={`font-kavoon text-2xl ${brandcoloredStyles}`}>
                AONEX
              </span>
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-12">
            <Link href="/aboutus">
              <NavItem label="About Us" />
            </Link>

            <Link href="/collections/all">
              <NavItem label="Collections" />
            </Link>

            <Link href="/contactus">
              <NavItem label="Contact Us" />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarGlobal;
