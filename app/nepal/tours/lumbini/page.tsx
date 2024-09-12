import { Metadata } from "next";
import lumbini_image from "@/public/images/nepal/tours/lumbini.jpg";
import { lumbini_tour_data as data } from "@/data/nepal/Tour/lumbini_data";
import Template from "@/app/_components/Template";

// data object contains details about the trek and is at the bottom

export default function page() {
  return <Template data={data} imgsrc={lumbini_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
