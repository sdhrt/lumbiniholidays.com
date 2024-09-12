import { Metadata } from "next";
import muktinath_image from "@/public/images/nepal/tours/muktinath.jpg";
import { muktinath_data as data } from "@/data/nepal/Tour/muktinath_data";
import Template from "@/app/_components/Template";

// data object contains details about the trek and is at the bottom

export default function page() {
  return <Template data={data} imgsrc={muktinath_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0, 150),
};
