"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Linkedin, ArrowRight } from "lucide-react";

const members = [
  {
    name: "Emma Collins",
    role: "Founder & Chief Executive Officer",
    image: "/teams/Guy-2.png",
  },
  {
    name: "Michael Ross",
    role: "Creative Director",
    image: "/teams/Guy-2.png",
  },
  {
    name: "Daniel Lee",
    role: "Product Designer",
    image: "/teams/Guy-2.png",
  },
  {
    name: "James Carter",
    role: "Marketing Lead",
    image: "/teams/Guy-2.png",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="relative pl-6 py-24 pb-72 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
      >
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#6d8b7d]" />
              <p className="text-sm font-medium uppercase tracking-wide text-[#1b1b1b]">
                Our Team
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#152f3e] md:text-6xl">
              The People <span className="text-[#bdbdbd]">Behind</span>
              <br />
              <span className="text-[#bdbdbd]">Our Success</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            className="group relative mt-4 flex items-center gap-3 text-sm font-medium cursor-pointer text-[#111]"
          >
            View All Member
            <span className="relative flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 transition-transform duration-300 group-hover:rotate-0 -rotate-45 border border-[#d9d9d9]">
              <ArrowRight />
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`
              group relative overflow-hidden rounded-xl cursor-pointer
              ${i === 0 ? "md:translate-y-0" : ""}
              ${i === 1 ? "md:translate-y-0" : ""}
              ${i === 2 ? "md:translate-y-64" : ""}
              ${i === 3 ? "md:translate-y-64" : ""}
            `}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY IMAGE*/}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h3 className="text-2xl font-bold uppercase">{member.name}</h3>

                <p className="mt-2 text-sm text-white/80">{member.role}</p>

                {/* <div className="mt-6 flex items-center gap-6 text-lg">
                  <Facebook className="cursor-pointer transition hover:opacity-70" />
                  <Instagram className="cursor-pointer transition hover:opacity-70" />
                  <Mail className="cursor-pointer transition hover:opacity-70" />
                  <Linkedin className="cursor-pointer transition hover:opacity-70" />
                </div> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
