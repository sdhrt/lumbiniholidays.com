import { Metadata } from "next";
import gokyo_ebc from "@/public/images/trekking/gokyo_ebc.jpg";
import TrekkingTemplate from "../_components/TrekkingPage";

// data object contains details about the trek and is at the bottom

export default function EverestBaseCampTrek() {
  return <TrekkingTemplate data={data} imgsrc={gokyo_ebc} />;
}

const data = {
  title: "Gokyo Everest Base Camp Trekking",
  description: `
After flying from Kathmandu into Lukla, we'll begin trekking to the Sherpa capital Namche Bazaar and on to the turquoise glacial waters of Gokyo Lakes, sacred to Tibetan Buddhist living in this area. Rising for an early start, we'll trek to the summit of Gokyo Ri for some of the best mountain views in all of Nepal. We'll travel across the Ngozumpa Glacier before crossing Cho La Pass to Dzongla.

From here, we'll make our way to Lobuche along the lateral moraine of the Khumbu Glacier and on to Gorak Shep at the base of the Kala Pattar. You can hike to the top for sunset views or make an early morning trek to its summit for a panoramic view the high Himalaya, including Everest at 29,035'. The trek to Everest Base Camp at the foot of the imposing Khumbu Icefall is 3-hours from Gorak Shep.`,
  altitude: 5545,
  difficulty: "Moderate",
  days: 22,
  itinerary: [
    { "01": "Arrival in Kathmandu airport and transfer to hotel" },
    { "02": "Kathmandu half day sightseeing, preparation for the treks" },
    { "03": "Fly to Lukla (2700m) and trek to Phakding (2600m)" },
    { "04": "Trek to Namche Bazar (3450m)" },
    { "05": "Excursion to Thame Monastery and back to Namche Bazar" },
    { "06": "Trek to Khumjung (3800m)" },
    { "07": "Trek to Dole (4000m)" },
    { "08": "Trek to Machermo (4400m)" },
    { "09": "Trek to Gokyo (4750m)" },
    { "10": "Excursion Gokyo Ri (5350m) and trek to Na (4400m)" },
    { "11": "Trek to Phortse (3800m)" },
    { "12": "Trek to Periche (4250m)" },
    { "13": "Trek to Lobuche (4900m)" },
    { "14": "Excursion Kala Pattar (5550m) and trek to Gorak Shep" },
    { "15": "Excursion Everest BC (5500m) and trek to Lobuche (4900m)" },
    { "16": "Trek to Pangboche (3980m)" },
    { "17": "Trek to Namche Bazar (3450m)" },
    { "18": "Trek to Phakding (2600m)" },
    { "19": "Trek to Lukla (2800m)" },
    { "20": "From Lukla fly back to Kathmandu" },
    { "21": "Kathmandu free day" },
    { "22": "Transfer to international airport" },
  ],
  service: {
    includes: [
      "Airport Pick and Drop.",
      "Hotel in Kathmandu according to your requirement.",
      "All Necessary Transportation",
      "Accommodation in Twin Sharing basis in teahouse/lodge in Trekking",
      "Meals, Three times a day (choose able from Menu)",
      "Everest park permit (Trekking permit)",
      "Trekking Guide",
      "A Porter for two clients to carry yours backpacks.",
      "All staffs with their insurance, meals, salary & accommodation etc.",
      "All government tax and services charge",
    ],
    excludes: [
      "Foods in Kathmandu",
      "Any activities in Kathmandu",
      "Soft and hard Drinks",
      "Air Tickets: Lukla/Kathmandu",
      "Tipp for staffs",
      "Personal & accidental insurance/ Helicopter Rescue",
      "If extra porters requires",
      "Personal equipments",
      "Any other things not mentioned and any things occur by natural & Political.",
    ],
  },
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
