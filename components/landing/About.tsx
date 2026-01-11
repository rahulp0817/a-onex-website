"use client";
import { motion, easeOut } from "framer-motion";
import { Droplet, Shield, Award } from "lucide-react";
import Image from "next/image";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const features = [
    {
      icon: Droplet,
      title: "Purity Assured",
      description: "Every drop undergoes advanced purification.",
      color: "text-cyan-500",
    },
    {
      icon: Shield,
      title: "Safe & Healthy",
      description: "Balanced minerals for everyday hydration.",
      color: "text-blue-500",
    },
    {
      icon: Award,
      title: "Trusted Quality",
      description: "Reducing plastic waste with responsible practices.",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-cyan-500 font-medium text-sm tracking-wider uppercase">
                — About Us
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8 uppercase"
            >
              About <span className="text-blue-500">AOne</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 font-medium text-lg leading-relaxed mb-12"
            >
              We started with a mission to make safe, clean, and affordable
              drinking water accessible to every home and business. With
              eco-friendly practices and advanced purification, we ensure every
              drop is pure, refreshing, and trustworthy.
            </motion.p>

            {/* Features */}
            <motion.div variants={containerVariants} className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className={`${feature.color} bg-blue-50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-0 ${feature.color}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl w-full h-[500px]">
              <Image
                src="/api/placeholder/800/900"
                alt="Aone Water Products"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-12 left-24 transform -translate-x-1/2 bg-blue-500 text-white px-8 py-6 rounded-tl-3xl rounded-br-3xl shadow-2xl flex flex-col max-w-xs "
            >
              <h3 className="text-3xl font-bold mb-1">Keep Hydration</h3>
              <p className="text-xl font-semibold">You Can Trust</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
