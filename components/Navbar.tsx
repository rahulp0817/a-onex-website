"use client";
import React, { useState, useEffect } from "react";
import { motion, Transition } from "framer-motion";
import Link from "next/link";
import NavItem from "./ui/navItem";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
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
            {/* Brand Logo */}
            <motion.div
              transition={springConfig}
              className="absolute left-8 md:left-0 cursor-pointer"
            >
              <Link href="/">
                <span className={`text-2xl font-kavoon ${brandcoloredStyles}`}>
                  AONEX
                </span>
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-12">
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
            <div className="md:hidden absolute w-10 h-10 flex items-center justify-center rounded-full right-6 hover:bg-gray-100">
              {!menuOpen ? (
                <Menu
                  size={28}
                  className="cursor-pointer text-gray-800 self-center"
                  onClick={() => setMenuOpen(true)}
                />
              ) : (
                <X
                  size={28}
                  className="cursor-pointer text-gray-800"
                  onClick={() => setMenuOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU SLIDE-IN */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed top-0 right-0 text-center h-screen w-full bg-white shadow-lg z-40 p-6 flex flex-col space-y-6 md:hidden mt-20"
        >
          <Link href="/aboutus" onClick={() => setMenuOpen(false)}>
            <span className="text-lg font-semibold">About Us</span>
          </Link>

          <Link href="/collections/all" onClick={() => setMenuOpen(false)}>
            <span className="text-lg font-semibold">Collections</span>
          </Link>

          <Link href="/contactus" onClick={() => setMenuOpen(false)}>
            <span className="text-lg font-semibold">Contact Us</span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
