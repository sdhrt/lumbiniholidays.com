import { Metadata } from "next";
import React from "react";
import TrekkingTemplate from "../../../components/TrekkingTemplate";
import langtang_valley_jpg from "@/public/images/nepal/trekking/langtang_valley.jpg";
import { langtang_valley_data as data } from "@/data/nepal/Trekking/langtang_valley_data";

export default function page() {
  return (
    <div>
      <TrekkingTemplate data={data} imgsrc={langtang_valley_jpg} />
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
