import { Metadata } from "next";
import seti_image from "@/public/images/nepal/rafting/seti.jpg";
import { seti_data as data } from "@/data/nepal/Rafting/seti";
import Template from "@/app/_components/Template";


export default function page() {
  return <Template
data={data} imgsrc={seti_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
