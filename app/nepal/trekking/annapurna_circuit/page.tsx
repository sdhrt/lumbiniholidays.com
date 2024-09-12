import { Metadata } from "next";
import annapurna_circuit from "@/public/images/nepal/trekking/annapurna_circuit.jpg";
import { annapurna_circuit_data as data } from "@/data/nepal/Trekking/annapurna_circuit_data";
import Template from "@/app/_components/Template";

// data object contains details about the trek and is at the bottom

export default function page() {
  return <Template data={data} imgsrc={annapurna_circuit} />;
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description.slice(0,150).slice(0, 150),
};
