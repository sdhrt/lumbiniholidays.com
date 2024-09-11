import { Metadata } from "next";
import sunkoshi_image from "@/public/images/nepal/rafting/sunkoshi.jpeg";
import { sunkoshi_rafting as data } from "@/data/nepal/Rafting/sunkoshi";
import SafariTemplate from "@/app/components/SafariTemplate";

export default function page() {
  return <SafariTemplate data={data} imgsrc={sunkoshi_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
