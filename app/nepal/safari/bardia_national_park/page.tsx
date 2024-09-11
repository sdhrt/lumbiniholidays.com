import { Metadata } from "next";
import bardia_image from "@/public/images/nepal/safari/bardia.jpg";
import { bardia_data as data } from "@/data/nepal/Safari/bardia";
import SafariTemplate from "@/app/components/SafariTemplate";

export default function page() {
  return <SafariTemplate data={data} imgsrc={bardia_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

