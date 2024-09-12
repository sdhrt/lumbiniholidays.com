import { Metadata } from "next";
import React from "react";
import Template from "../../../_components/Template";
import jiri_everest from "@/public/images/nepal/trekking/jiri_everest.jpg";
import { jiri_everest_base_camp_data as data } from "@/data/nepal/Trekking/jiri_everest_base_camp_data";

export default function page() {
  return (
    <div>
      <Template data={data} imgsrc={jiri_everest} />
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
