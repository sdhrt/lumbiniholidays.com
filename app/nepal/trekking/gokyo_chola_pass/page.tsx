import { Metadata } from "next";
import React from "react";
import TrekkingTemplate from "../_components/TrekkingPage";
import gokyo_chola_img from "@/public/images/trekking/gokyo_chola.jpg";

export default function page() {
  return (
    <div>
      <TrekkingTemplate data={data} imgsrc={gokyo_chola_img} />
    </div>
  );
}

const data = {
  title: "Gokyo Chola Pass Trekking",
  description: `The second part of our trip heads up the Dudh Kosi Valley, crowned by the 8.153-meter peak of Cho Oyu and its companion peak Gyachung Kang. Gokyo vs. Kala Pattar is a favourite argument: those who have visited both seem to rate Gokyo slightly higher. Despite this it gets fewer trekkers; the lure of Everest Base Camp is too strong.

Take the trail on the valley's west side. Head through small summer herding settlements to skirt the giant Ngozumba Glacier and arrive at a series of small lakes. Gokyo (4,750 meters) is a tiny herding settlement by the third lake and has several lodges. Climb the 5,483-meter peak to the north-west (also dubbed Kala Pattar) for views of Cho Oyu, Everest, Lhotse, and Makalu, plus a host of smaller peaks. Several more lakes and Cho Oyu Base Camp lie north up the glacier.`,
  altitude: 5545,
  difficulty: "Moderate",
  days: 17,
  itinerary: [
    { "01": "Fly to Lukla / 35min" },
    { "02": "Trek to Namche" },
    { "03": "Rest day at Namche for acclimatization" },
    { "04": "Trek to Tengboche" },
    { "05": "Trek from Tengboche to Dole" },
    { "06": "Trek from Dole to Machermo" },
    { "07": "Trek from Machermo to Gokyo" },
    { "08": "Trek from Gokyo to Thangna" },
    { "09": "Trek to Dzongla" },
    { "10": "Trek to Lobuche" },
    { "11": "Trek to Gorakshep" },
    { "12": "Visit Kala Pathar for Everest Base Camp view" },
    { "13": "Trek to Pheriche" },
    { "14": "Trek to Tengboche" },
    { "15": "Trek from Tengboche to Namche" },
    { "16": "Trek from Namche to Lukla" },
    { "17": "Fly back to Kathmandu" },
  ],
  details: [],
  service: {
    includes: [
      "Airport Pick and Drop",
      "Hotel in Kathmandu according to your requirement",
      "All Necessary Transportation",
      "Accommodation in Twin Sharing basis in teahouse/lodge in Trekking",
      "Meals, Three times a day (chooseable from Menu)",
      "Everest park permit (Trekking permit)",
      "Trekking Guide",
      "A Porter for two clients to carry your backpacks",
      "All staffs with their insurance, meals, salary & accommodation etc.",
      "All government tax and services charge",
    ],
    excludes: [
      "Foods in Kathmandu",
      "Any activities in Kathmandu",
      "Soft and hard Drinks",
      "Air Tickets: Lukla/Kathmandu",
      "Tip for staffs",
      "Personal & accidental insurance/Helicopter Rescue",
      "If extra porters required",
      "Personal equipment",
      "Any other things not mentioned and any things occur by natural & Political",
    ],
  },
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
