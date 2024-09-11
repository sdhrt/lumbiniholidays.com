"use client";
import React from "react";
import swayambhu_image from "@/public/images/nepal/swayambhu.png";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.75,
        },
      }}
      className="flex-1"
    >
      <Image src={swayambhu_image} alt="Swayambhu" priority />
    </motion.div>
  );
}

export default HeroImage;
