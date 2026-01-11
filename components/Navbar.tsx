"use client";
import { useState, useEffect } from "react";
import { motion, Transition } from "framer-motion";
import Link from "next/link";
import NavItem from "./ui/navItem";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  useEffect(() => {
    if (!isLandingPage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);

  const springConfig: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
  };

  const navbarClass = isLandingPage
    ? isScrolled
      ? "bg-white/30 backdrop-blur-xl shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md";

  const heightStyles = isScrolled ? "h-18" : "h-20";
  const logoColor = isLandingPage
    ? isScrolled
      ? "text-[var(--primary-color)]"
      : "text-white"
    : "text-[var(--primary-color)]";
  const navScrolledProp = isLandingPage ? isScrolled : true;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springConfig}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-30">
          <div
            className={`relative flex items-center justify-between ${heightStyles}`}
          >
            {/* Brand Logo */}
            <motion.div transition={springConfig} className="cursor-pointer">
              <Link href="/">
                <span
                  className={`text-2xl font-kavoon transition-colors duration-300 hover:text-(--primary-color) ${logoColor}`}
                >
                  AONEX
                </span>
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/aboutus">
                <NavItem label="About Us" isScrolled={navScrolledProp} />
              </Link>

              <Link href="/collections/all">
                <NavItem label="Collections" isScrolled={navScrolledProp} />
              </Link>

              {/* Enquire Now Button */}
              <Link href="/enquire">
                <button className="group ml-4 px-5 py-3 cursor-pointer bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors duration-300 flex gap-2 items-center">
                  Enquire Now
                  <ArrowRight
                    size={24}
                    className="
      -rotate-45
      transition-transform
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:rotate-0
      group-hover:translate-x-1
    "
                  />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
              {!menuOpen ? (
                <Menu
                  size={28}
                  className="cursor-pointer text-gray-800"
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

          <Link href="/enquire" onClick={() => setMenuOpen(false)}>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3.5 rounded-full text-white text-lg font-medium shadow-lg flex items-center gap-2 cursor-pointer">
              Explore Products
              <ArrowRight className="-rotate-45" size={28} />
            </button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
