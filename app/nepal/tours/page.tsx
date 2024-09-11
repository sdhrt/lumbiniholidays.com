import React from "react";
import { Link } from "next-view-transitions";
import Image, { StaticImageData } from "next/image";

import ChitlangImage from "@/public/images/nepal/tours/chitlang.jpg";
import KalinchowkImage from "@/public/images/nepal/tours/kalinchowk.jpg";
import NepalImage from "@/public/images/nepal/boudhanath.jpg";
import LumbiniImage from "@/public/images/nepal/tours/lumbini.jpg";
import MuktinathImage from "@/public/images/nepal/tours/muktinath.jpg";
import { ArrowUpRight, BadgeDollarSign, Clock } from "lucide-react";

export default function TourPage() {
  return (
    <div className="flex flex-col">
      <div className="w-screen h-96 bg-center bg-[url('https://images.pexels.com/photos/3142916/pexels-photo-3142916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <span className="flex justify-center items-center h-full text-4xl lg:text-[4rem] font-bold text-white hover:stroke-black hover:cursor-default">
          Tours in Nepal
        </span>
      </div>
      <div className="p-4 md:px-16 text-sm text-muted-foreground">
        Nepal is known as an outdoor enthusiast paradise due to some of the most
        spectacular trekking routes in the world, having eight of the highest
        mountains over 8000 meters in altitude and what seems like endless
        6,000-meter snow-capped peaks. By walking on foot from one remote
        village to the next, one truly experiences the exquisite landscape and
        culture that Nepal has to offer.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-10 gap-8 animate-up">
        <TourCard title="Chitlang" imgsrc={ChitlangImage} days={2} price={40} />
        <TourCard title="Nepal" imgsrc={NepalImage} days={11} />
        <TourCard title="Lumbini" imgsrc={LumbiniImage} days={5} />
        <TourCard
          title="Muktinath"
          imgsrc={MuktinathImage}
          days={6}
          price={400}
        />
        <TourCard
          title="Kalinchowk"
          imgsrc={KalinchowkImage}
          days={2}
          price={45}
        />
      </div>
    </div>
  );
}

const TourCard = ({
  title,
  imgsrc,
  days,
  price,
}: {
  title: string;
  imgsrc: StaticImageData;
  days: number;
  price?: number;
}) => {
  return (
    <div className="flex flex-col w-fit rounded-md shadow-md hover:shadow-lg max-w-60 hover:translate-y-[-0.5rem] transition-all hover:ease-out hover:cursor-default hover:duration-200">
      <Image
        src={imgsrc}
        alt={title}
        className="h-60 w-60 object-cover"
        objectPosition="center"
      />
      <div className="flex flex-col animate-in py-2 gap-1 *:hover:text-yellow-700">
        <span className="font-semibold text-xl md:text-2xl px-2 ">
          {title} Tour
        </span>
        <span className="font-semibold text-sm px-2 flex items-center gap-1 hover:text-yellow-800">
          <Clock />
          <span>{days} days</span>
        </span>
        <span className="font-semibold text-sm px-2 flex items-center gap-1 hover:text-yellow-800">
          <BadgeDollarSign />
          {price ? `${price} $` : "negotiable"}
        </span>
        <Link
          href={`tours/${title.toLowerCase()}`}
          className="group flex items-center mx-2 py-2 px-4 text-sm font-semibold border bg-orange-400 hover:bg-green-600 rounded-sm"
        >
          <span className="text-white flex items-center">
            Explore Now
            <ArrowUpRight className="group-hover:scale-110" />
          </span>
        </Link>
      </div>
    </div>
  );
};
