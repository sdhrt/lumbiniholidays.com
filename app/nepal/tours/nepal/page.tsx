import { Metadata } from "next";
import nepal_tour_image from "@/public/images/nepal/boudhanath.jpg";
import { nepal_tour_data as data } from "@/data/nepal/Tour/nepal_data";
import Template from "@/app/_components/Template";

// data object contains details about the trek and is at the bottom

export default function NepalTour() {
  return <Template data={data} imgsrc={nepal_tour_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
