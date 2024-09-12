import { Metadata } from "next";
import bardia_image from "@/public/images/nepal/safari/bardia.jpg";
import { bardia_data as data } from "@/data/nepal/Safari/bardia";
import Template from "@/app/_components/Template";


export default function page() {
  return <Template
data={data} imgsrc={bardia_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};

