import TourCard from "./TourCard";
import mountainFlightImage from "@/public/images/nepal/tours/mountainTour.jpg";
import chitlangTour from "@/public/images/nepal/tours/chitlang.jpg";
import muktinathTour from "@/public/images/nepal/tours/muktinath.jpg";
import kalinchowkTour from "@/public/images/nepal/tours/kalinchowk.jpg";
import AllNepalTourImage from "@/public/images/nepal/stupa.jpg";

export default function TourMarquee() {
  return (
    <div className="w-screen mt-10 py-10 flex flex-col items-center gap-8">
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
          <TourCard
            title="All Nepal Tour"
            image={AllNepalTourImage}
            link="nepal/tours/nepal"
          />
          <TourCard
            title="Chitlang tour"
            image={chitlangTour}
            link="nepal/tours/chitlang"
          />
          <TourCard
            title="Muktinath tour"
            image={muktinathTour}
            link="nepal/tours/muktinath"
          />
          <TourCard
            title="Kalinchowk tour"
            image={kalinchowkTour}
            link="nepal/tours/kalinchowk"
          />
        </div>
        <div className="flex gap-5 animate-marquee2 absolute top-0 pr-5">
          <TourCard
            title="Mountain Flight - Everest"
            image={mountainFlightImage}
            link="#"
          />
          <TourCard title="All Nepal Tour" image={AllNepalTourImage} link="#" />
          <TourCard title="Lumbini tour" image={chitlangTour} link="#" />
          <TourCard title="Muktinath tour" image={muktinathTour} link="#" />
          <TourCard title="Kalinchowk tour" image={kalinchowkTour} link="#" />
        </div>
      </div>
    </div>
  );
}
