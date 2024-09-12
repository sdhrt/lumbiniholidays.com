import { Metadata } from "next";
import React from "react";
import Template from "../../../_components/Template";
import gokyo_chola_img from "@/public/images/nepal/trekking/gokyo_chola.jpg";
import { gokyo_chola_pass_data as data } from "@/data/nepal/Trekking/gokyo_chola_pass_data";

export default function page() {
  return (
    <div>
      <Template data={data} imgsrc={gokyo_chola_img} />
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
