import { Metadata } from "next";
import React from "react";
import Template from "../../../_components/Template";
import tashi_lapcha_img from "@/public/images/nepal/trekking/tashi_lapcha.jpeg";
import { tashi_lapcha_pass_data as data } from "@/data/nepal/Trekking/tashi_lapcha_pass_data";

export default function page() {
  return (
    <div>
      <Template data={data} imgsrc={tashi_lapcha_img} />
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
