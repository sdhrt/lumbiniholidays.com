"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import hiaceImage from "@/public/images/nepal/vehicle/hiace.jpeg";
import jomsomBusImage from "@/public/images/nepal/vehicle/jomsombus.jpg";
import delhiBusImage from "@/public/images/nepal/vehicle/delhibus.jpeg";
import { motion } from "framer-motion";

export default function Vehicle() {
  return (
    <div className="flex flex-col m-4 md:mx-24 lg:mx-32 gap-2 md:gap-4">
      <div className="">
        <span className="font-bold text-xl md:text-2xl tracking-tight text-neutral-900 flex justify-center">
          We offer vehicle hiring servies
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 lg:gap-0">
        <VehicleCard
          name="Hiace"
          src={hiaceImage}
          description="The Toyota Hiace is a versatile and reliable van, popular for commercial use. Known for its durability, spacious interior, and efficient performance, it accommodates various business needs from cargo transport to passenger services. Its robust build and advanced safety features ensure a dependable vehicle for diverse applications."
        />
        <VehicleCard
          name="Kathmandu Delhi Bus"
          src={delhiBusImage}
          description="The Kathmandu-Delhi bus service offers a convenient and affordable way to travel between Nepal and India. This long-distance route provides comfortable seating, air conditioning, and reliable service, making it a popular choice for tourists and locals. The journey offers scenic views and a hassle-free border crossing experience."
        />
        <VehicleCard
          name="Kathmandu Jomsom Bus"
          src={jomsomBusImage}
          description="The Kathmandu-Jomsom bus service connects Nepal's capital to the gateway of the Annapurna region. It provides an adventurous journey through diverse terrains, offering stunning views of the Himalayas. This route is favored by trekkers and pilgrims heading to Muktinath Temple. The service emphasizes comfort and safety on the rugged mountain roads."
        />
      </div>
    </div>
  );
}

const VehicleCard = ({
  name,
  src,
  description,
}: {
  name: string;
  src: StaticImageData;
  description: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
        },
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 max-w-[300px] justify-between rounded-md border hover:shadow-lg transition-all hover:translate-y-[-0.5rem]"
    >
      <Image
        src={src}
        alt={name}
        sizes={"100vw"}
        className="w-full h-[200px] rounded-md"
      />
      <h1 className="texl-xl font-semibold px-4">{name}</h1>
      <p className="text-sm text-muted-foreground px-4 pb-2 leading-4 md:leading-normal hover:cursor-default">
        {description}
      </p>
    </motion.div>
  );
};
