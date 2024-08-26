import { Link } from "next-view-transitions";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function TourCard({
  title,
  image,
  link,
}: {
  title: string;
  image: StaticImageData;
  link: string;
}) {
  return (
    <Link href={link} className="w-max py-2">
      <div className="rounded-lg flex flex-row items-center border hover:shadow-md hover:translate-y-[-0.2rem] hover:transition">
        <Image
          src={image}
          alt={title}
          className="object-contain rounded-md"
          height={80}
        />
        <h1 className="font-semibold tracking-tight px-2">{title}</h1>
      </div>
    </Link>
  );
}
