"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import PlantsSection from "./PlantSection";
import MeetOurTeam from "./MeetOurTeam";
import VisonSection from "./VisonSection";
import About from "./About";

const AboutUsContent = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };
  return (
    <div className="px-6 md:px-18 mt-12">

      {/* about us */}
      {/* our story */}
      <About />

      {/* our mission/vison */}
      <VisonSection />

      {/* our plants */}
      <PlantsSection />

      {/* our team */}
      <MeetOurTeam />
    </div>
  );
};

export default AboutUsContent;
