import { Metadata } from "next";
import everest_base_camp from "@/public/images/nepal/trekking/everest_base_camp.jpg";
import { everest_base_camp_data as data } from "@/data/nepal/Trekking/everest_base_camp";
import TrekkingTemplate from "../../../components/TrekkingTemplate";

// data object contains details about the trek and is at the bottom

export default function EverestBaseCampTrek() {
  return <TrekkingTemplate data={data} imgsrc={everest_base_camp} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
