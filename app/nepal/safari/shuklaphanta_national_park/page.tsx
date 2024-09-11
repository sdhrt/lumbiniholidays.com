import { Metadata } from "next";
import shuklaphanta_image from "@/public/images/nepal/safari/shuklaphanta.jpg";
import { shuklaphanta_data as data } from "@/data/nepal/Safari/shuklaphanta";
import SafariTemplate from "@/app/components/SafariTemplate";

export default function page() {
  return <SafariTemplate data={data} imgsrc={shuklaphanta_image} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

