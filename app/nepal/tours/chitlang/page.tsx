import { Metadata } from "next";
import chitlang_image from "@/public/images/nepal/tours/chitlang.jpg";
import { chitang_tour_data as data } from "@/data/nepal/Tour/chitlang_data";
import Template from "@/app/_components/Template";

// data object contains details about the trek and is at the bottom

export default function page() {
  return <Template data={data} imgsrc={chitlang_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
