"use client";
import React from "react";
import { HardHat, Headset, PlaneTakeoff, Settings } from "lucide-react";
import { motion } from "framer-motion";

function Features() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: -100,
        transition: {
          duration: 0.5,
        },
      }}
      className="bg-[#023047] grid grid-cols-1 md:grid-cols-2 place-items-center p-4 md:p-10 text-white text-lg md:text-xl md:m-20 md:translate-y-[-6rem] md:rounded-3xl"
    >
      <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1">
        <Headset />
        24/7 support
      </div>
      <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1 ">
        <HardHat />
        Safety
      </div>
      <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1">
        <Settings />
        Customizable Program
      </div>
      <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1">
        <PlaneTakeoff />
        Private Departure
      </div>
    </motion.div>
  );
}

export default Features;
