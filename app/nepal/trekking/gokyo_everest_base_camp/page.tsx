import { Metadata } from "next";
import gokyo_ebc from "@/public/images/nepal/trekking/gokyo_ebc.jpg";
import Template from "../../../_components/Template";
import { gokyo_everest_base_camp_data as data } from "@/data/nepal/Trekking/gokyo_everest_base_camp_data";

// data object contains details about the trek and is at the bottom

export default function EverestBaseCampTrek() {
  return <Template data={data} imgsrc={gokyo_ebc} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150),
};
