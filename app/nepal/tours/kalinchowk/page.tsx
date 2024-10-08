import { Metadata } from "next";
import kalinchowk_image from "@/public/images/nepal/tours/kalinchowk.jpg";
import { kalinchowk_tour_data as data } from "@/data/nepal/Tour/kalinchowk_data";
import Template from "@/app/_components/Template";

// data object contains details about the trek and is at the bottom

export default function page() {
  return <Template data={data} imgsrc={kalinchowk_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
