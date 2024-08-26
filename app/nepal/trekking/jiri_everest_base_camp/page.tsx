import { Metadata } from "next";
import React from "react";
import TrekkingTemplate from "../_components/TrekkingPage";
import jiri_everest from "@/public/images/trekking/jiri_everest.jpg";

export default function page() {
  return (
    <div>
      <TrekkingTemplate data={data} imgsrc={jiri_everest} />
    </div>
  );
}

const data = {
  title: "Jiri Everest Base Camp Trek",
  description: `After drive from Kathmandu into Jiri, we'll begin trekking from Jiri to the Sherpa capital Namche Bazaar.

From here, we'll make our way to Lobuche along the lateral moraine of the Khumbu Glacier and on to Gorak Shep at the base of the Kala Pattar. You can hike to the top for sunset views or make an early morning trek to its summit for a panoramic view the high Himalaya, including Everest at 29,035'. The trek to Everest Base Camp at the foot of the imposing Khumbu Icefall is 3-hours from Gorak Shep.`,
  altitude: 5545,
  difficulty: "Moderate",
  days: 21,
  itinerary: [
    { "01": "Drive from Kathmandu to Jiri" },
    { "02": "Trek through settlements to Bandar" },
    { "03": "Trek to Sete village" },
    { "04": "Trek over Lamjura Pass to Junbesi" },
    { "05": "Continue trek through Solu to Nuntala" },
    { "06": "Trek to the village of Khare Khola" },
    { "07": "Trek to Surkhe" },
    { "08": "Trek to Phakding" },
    { "09": "Trek to Namche Bazaar" },
    {
      "10": "Acclimatization day at Namche Bazaar (Optional hike to Khunde and Khumjung Villages)",
    },
    { "11": "Trek to Thyangboche monastery" },
    { "12": "Trek to Pangboche and continue to Dingboche village" },
    { "13": "Acclimatization day (Optional hike to Chukung Ri)" },
    { "14": "Trek to Thukla and continue to Lobuche" },
    {
      "15": "Trek up the Khumbu Glacier to Everest Base Camp, overnight at Gorakshep",
    },
    {
      "16": "Morning climb to Kala Patthar Everest viewpoint, afternoon trek to Thugla or Pheriche",
    },
    { "17": "Trek to Phortse village" },
    { "18": "Trek to Namche Bazaar" },
    { "19": "Trek down the valley to Monjo or Phakding" },
    { "20": "Continue trek to Lukla airport" },
    { "21": "Fly from Lukla to Kathmandu" },
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
