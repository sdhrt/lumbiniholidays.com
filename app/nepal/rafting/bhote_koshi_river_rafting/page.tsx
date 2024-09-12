import { Metadata } from "next";
import bhotekoshi_image from "@/public/images/nepal/rafting/bhotekoshi.jpg";
import { bhotekoshi_rafting_data as data } from "@/data/nepal/Rafting/bhotekoshi";
import Template from "@/app/_components/Template";

export default function page() {
  return <Template data={data} imgsrc={bhotekoshi_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0, 150),
};
