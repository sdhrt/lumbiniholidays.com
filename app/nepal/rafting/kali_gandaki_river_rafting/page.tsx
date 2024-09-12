import { Metadata } from "next";
import kaligandaki_image from "@/public/images/nepal/rafting/kaligandaki.jpg";
import { kaligandaki_data as data } from "@/data/nepal/Rafting/kaligandaki";
import Template from "@/app/_components/Template";

export default function page() {
  return <Template data={data} imgsrc={kaligandaki_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0, 150),
};
