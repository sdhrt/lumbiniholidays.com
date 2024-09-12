import { Metadata } from "next";
import trishuli_image from "@/public/images/nepal/rafting/trishuli.jpeg";
import { trisuli_rafting_data as data } from "@/data/nepal/Rafting/trishuli";
import Template from "@/app/_components/Template";


export default function page() {
  return <Template
data={data} imgsrc={trishuli_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
