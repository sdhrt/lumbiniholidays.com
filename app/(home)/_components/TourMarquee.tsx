import TourCard from "./TourCard";
import mountainFlightImage from "@/public/images/mountainTour.jpg";
import lumbiniTourImage from "@/public/images/lumbini.jpg";
import muktinathTour from "@/public/images/muktinath.jpg";
import kalinchowkTour from "@/public/images/kalinchowk.jpg";
import AllNepalTourImage from "@/public/images/stupa.jpg";

export default function TourMarquee() {
  return (
    <div className="w-screen py-10 flex flex-col items-center gap-8">
      <div className="md:translate-y-[-2rem]">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight text-neutral-900 flex justify-center">
          Explore tours
        </h2>
      </div>
      <div className="relative flex overflow-x-hidden w-screen">
        <div className="flex gap-5 animate-marquee pr-5">
          <TourCard
            title="Mountain Flight - Everest"
            image={mountainFlightImage}
            link="#"
          />
          <TourCard title="All Nepal Tour" image={AllNepalTourImage} link="" />
          <TourCard title="Lumbini tour" image={lumbiniTourImage} link="#" />
          <TourCard title="Muktinath tour" image={muktinathTour} link="#" />
          <TourCard title="Kalinchowk tour" image={kalinchowkTour} link="#" />
        </div>
        <div className="flex gap-5 animate-marquee2 absolute top-0 pr-5">
          <TourCard
            title="Mountain Flight - Everest"
            image={mountainFlightImage}
            link="#"
          />
          <TourCard title="All Nepal Tour" image={AllNepalTourImage} link="#" />
          <TourCard title="Lumbini tour" image={lumbiniTourImage} link="#" />
          <TourCard title="Muktinath tour" image={muktinathTour} link="#" />
          <TourCard title="Kalinchowk tour" image={kalinchowkTour} link="#" />
        </div>
      </div>
    </div>
  );
}
