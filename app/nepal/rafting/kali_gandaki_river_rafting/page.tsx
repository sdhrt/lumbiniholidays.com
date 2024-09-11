import { Metadata } from "next";
import kaligandaki_image from "@/public/images/nepal/rafting/kaligandaki.jpg";
import { kaligandaki_data as data } from "@/data/nepal/Rafting/kaligandaki";
import SafariTemplate from "@/app/components/SafariTemplate";

export default function page() {
  return <SafariTemplate data={data} imgsrc={kaligandaki_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
