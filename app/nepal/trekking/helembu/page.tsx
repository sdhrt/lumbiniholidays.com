import { Metadata } from "next";
import React from "react";
import TrekkingTemplate from "../../../components/TrekkingTemplate";
import helembu_img from "@/public/images/nepal/trekking/helambu_trek.jpg";
import { helembu_data as data } from "@/data/nepal/Trekking/helembu_data";

export default function page() {
  return (
    <div>
      <TrekkingTemplate data={data} imgsrc={helembu_img} />
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
