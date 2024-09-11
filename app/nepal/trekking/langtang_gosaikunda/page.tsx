import { Metadata } from "next";
import React from "react";
import TrekkingTemplate from "../../../components/TrekkingTemplate";
import langtang_gosaikunda_img from "@/public/images/nepal/trekking/langtang_gosaikunda.jpg";
import { langtang_gosainkunda_data as data } from "@/data/nepal/Trekking/langtang_gosainkunda_data";

export default function page() {
  return (
    <div>
      <TrekkingTemplate data={data} imgsrc={langtang_gosaikunda_img} />
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
