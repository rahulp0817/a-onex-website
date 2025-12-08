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
  MapIcon,
  MapPin,
} from "lucide-react";

interface FooterItem {
  name: string;
  link?: string;
  isTitle?: boolean;
}

interface FooterSection {
  title: string;
  items: FooterItem[];
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks: FooterSection[] = [
    {
      title: "LEGAL",
      items: [
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Terms of Use", link: "/terms" },
      ],
    },
    {
      title: "OUR COMPANY",
      items: [
        { name: "About", link: "/aboutus" },
        { name: "Collections", link: "/collections/all" },
        { name: "Become Dealer", link: "/club" },
        { name: "A-One Gallery", link: "/collections/all" },
        { name: "Manufacturing Plants", link: "/collections/all" },
        { name: "Book a Plant Visit", link: "/collections/all" },
      ],
    },
    {
      title: "CUSTOMER SUPPORT",
      items: [
        { name: "Monday to Saturday", link: "" },
        { name: "+91 1234567890", link: "tel:+911234567890" },
      ],
    },
    {
      title: "CONTACT US",
      items: [
        {
          name: "Unit 1",
          isTitle: true,
          link: "https://www.google.com/maps/dir//Kapnoor,+Kalaburagi,+Karnataka+585104/@12.8903811,77.6421572,3559m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bc8c70de7489ef1:0x16888becee813b73!2m2!1d76.8543426!2d17.3625097?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
          name: "Plot No Q3, 1st Stage Kapnoor Industrial Estate, Kalaburagi, Karnataka 585104",
        },

        { name: " " },

        {
          name: "Unit 2",
          isTitle: true,
          link: "https://www.google.com/maps/place/Shree+Balaji+Products/@17.2777921,76.8833093,871m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc8c12fc1389bc3:0x8beb146aa73213f8!8m2!3d17.2777921!4d76.8833093!16s%2Fg%2F11x2b651tl?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
          name: "Plot No 305, P1 & P2 Sy No 58 Nandur K, Shahbad Road, Nandur Kesaratgi Industrial Area, KIADB, Karnataka 585106",
        },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24">
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
                    {item.isTitle && item.link ? (
                      <Link
                        href={item.link}
                        className="text-white font-bold text-sm mt-4 block hover:underline"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    ) : item.isTitle ? (
                      <p className="text-white font-bold text-sm mt-4">
                        {item.name}
                      </p>
                    ) : item.link ? (
                      <Link
                        href={item.link}
                        className="text-gray-300 text-sm font-semibold hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <p className="text-gray-300 text-sm font-semibold">
                        {item.name}
                      </p>
                    )}
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
            {
              Icon: MapPin,
              link: "https://www.google.com/maps/dir//Kapnoor,+Kalaburagi,+Karnataka+585104/@12.8903811,77.6421572,3559m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bc8c70de7489ef1:0x16888becee813b73!2m2!1d76.8543426!2d17.3625097?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
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
