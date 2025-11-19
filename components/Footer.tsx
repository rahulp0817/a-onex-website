"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
  Mail,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "CUSTOMER SERVICE",
      items: [
        { name: "Help", link: "/help" },
        { name: "Policies", link: "/policies" },
      ],
    },
    {
      title: "OUR COMPANY",
      items: [
        { name: "About", link: "/aboutus" },
        { name: "Collections", link: "/collections/all" },
        { name: "Become Dealer", link: "/club" },
      ],
    },
    {
      title: "RESOURCES",
      items: [
        { name: "Wholesale", link: "/wholesale" },
        { name: "Corporate Sales", link: "/corporate-sales" },
      ],
    },
    {
      title: "LEGAL",
      items: [
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Accessibility Statement", link: "/accessibility" },
        { name: "Terms of Use", link: "/terms" },
      ],
    },
    {
      title: "CONTACT US",
      items: [
        { name: "Bengaluru, Karnataka, 560064", link: "/contact" },
        { name: "+91 1234567890", link: "tel:+911234567890" },
      ],
    },
  ];

  return (
    <footer className="relative text-gray-300 bg-gray-950 font-sans mt-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative max-w-full mx-auto px-10 md:px-20 lg:px-40 py-16">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-24">
          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="text-white font-bold text-sm tracking-wide mb-4 uppercase">
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="text-gray-300 text-sm font-semibold hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-start mt-28 space-x-4">
          {[
            { Icon: Facebook, link: "https://www.facebook.com/aonewaters" },
            { Icon: Mail, link: "mailto:shreebalajiproducts23@gmail.com" },
            { Icon: Instagram, link: "https://www.instagram.com/aonewaters" },
            { Icon: Youtube, link: "https://www.youtube.com/@aonewaters" },
            {
              Icon: Linkedin,
              link: "https://www.linkedin.com/company/aonewaters",
            },
          ].map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-(--primary-color)] transition hover:bg-(--primary-color)"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-400 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-semibold text-gray-300">
          <p>
            © {new Date().getFullYear()} Shree Balaji Products | A Division of
            Lifetime Brands, Inc. All Rights Reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-(--primary-color) rounded-full text-white hover:bg-(--primary-color-dark)"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
