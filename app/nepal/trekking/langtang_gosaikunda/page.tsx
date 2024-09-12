import { Metadata } from "next";
import React from "react";
import Template from "../../../_components/Template";
import langtang_gosaikunda_img from "@/public/images/nepal/trekking/langtang_gosaikunda.jpg";
import { langtang_gosainkunda_data as data } from "@/data/nepal/Trekking/langtang_gosainkunda_data";

export default function page() {
  return (
    <div>
      <Template data={data} imgsrc={langtang_gosaikunda_img} />
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
