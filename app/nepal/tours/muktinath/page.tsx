import { Metadata } from "next";
import muktinath_image from "@/public/images/nepal/tours/muktinath.jpg";
import { kalinchowk_tour_data as data } from "@/data/nepal/Tour/kalinchowk_data";
import TourTemplate from "@/app/components/TourTemplate";

// data object contains details about the trek and is at the bottom

export default function page() {
  return <TourTemplate data={data} imgsrc={muktinath_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
