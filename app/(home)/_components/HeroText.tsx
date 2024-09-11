"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

function HeroText() {
  return (
    <div className="p-4 md:max-w-[40%] flex flex-col items-center md:items-start justify-evenly gap-4">
      <h1 className="text-[1.8rem] md:text-[3rem] tracking-tight leading-[2rem] md:leading-[2.8rem] font-semibold text-[#023047]">
        {`WELCOME TO LUMBINI HOLIDAYS`.split(" ").map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: i / 4,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </h1>
      <p className="md:text-sm text-gray-800 my-4 lg:translate-x-6 leading-6">
        A leading tours company offering tailor-made Tours and Trekking with
        adventure from the spectacular Himalayas to wildlife safari, variety of
        flora, fauna and exotic cultures.
      </p>
      <Link href="/nepal/tours" className="md:translate-x-6 translate-y-[18rem] md:translate-y-0">
        <Button className="bg-[#ffb703] text-[#023047] hover:text-white">
          Book a tour now
        </Button>
      </Link>
    </div>
  );
}

export default HeroText;
