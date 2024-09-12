import { Metadata } from "next";
import shuklaphanta_image from "@/public/images/nepal/safari/shuklaphanta.jpg";
import { shuklaphanta_data as data } from "@/data/nepal/Safari/shuklaphanta";
import Template from "@/app/_components/Template";

export default function page() {
  return <Template data={data} imgsrc={shuklaphanta_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0, 150),
};
