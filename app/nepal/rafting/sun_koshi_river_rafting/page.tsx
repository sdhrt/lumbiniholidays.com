import { Metadata } from "next";
import sunkoshi_image from "@/public/images/nepal/rafting/sunkoshi.jpeg";
import { sunkoshi_rafting as data } from "@/data/nepal/Rafting/sunkoshi";
import Template from "@/app/_components/Template";


export default function page() {
  return <Template
data={data} imgsrc={sunkoshi_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
