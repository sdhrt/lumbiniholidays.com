import { Metadata } from "next";
import React from "react";
import TrekkingTemplate from "../_components/TrekkingPage";
import tashi_lapcha_img from "@/public/images/trekking/tashi_lapcha.jpeg";

export default function page() {
  return (
    <div>
      <TrekkingTemplate data={data} imgsrc={tashi_lapcha_img} />
    </div>
  );
}

const data = {
  title: "Tashi Lapcha Pass Trek",
  description: `After crossing, Tashi Lapcha, the trail drops down into Thame village (3790m) on the Khumbu valley. After the trial goes to another challenging Pass “Renjo La” pass, the trail goes to Gokyo Lake. The trek to Gokyo provides an excellent opportunity to see an eyeful view of the Mt. Everest at close range.

The image of this region is associated with the soaring view of the most popular mountains view of Nepal like Mt. Cho-Oyo (8153m), Mt. Everest (8848m), Mt. Lhotse (8501m), Makalu (8463m) etc. which are clearly visible from Gokyo Ri (5483m.) above Gokyo Lake. After you will continues the trek to Everest Base Camp and KalaPattar by crossing Cho-La Pass.`,
  altitude: 5450,
  difficulty: "Challenging",
  days: 30,
  itinerary: [
    { "01": "Drive from Kathmandu to Dolakha, overnight in Camp" },
    { "02": "Trek from Dolakha to Totikhet, overnight in Camp" },
    { "03": "Trek from Totikhet, overnight in Camp" },
    { "04": "Trek to Suridobhan, overnight in Camp" },
    { "05": "Trek to Jagat, overnight in Camp" },
    { "06": "Trek to Simigaon, overnight in Camp" },
    { "07": "Trek to Dhofuk, overnight in Camp" },
    { "08": "Trek to Beding, overnight in Camp" },
    { "09": "Trek to Na Gawn, overnight in Camp" },
    { "10": "Trek to Chobu, overnight in Camp" },
    { "11": "Rest day, overnight in Camp" },
    { "12": "Trek to Taram Bau GL, overnight in Camp" },
    { "13": "Trek to Phedi, overnight in Camp" },
    { "14": "Trek to Tashi Laptsa Pass, overnight in Camp" },
    {
      "15": "Climb Pachermo Peak, camp at Phedi (Base Camp), overnight in Camp",
    },
    { "16": "Trek to Thame, overnight in Camp" },
    { "17": "Trek to Marulung, overnight in Camp" },
    { "18": "Trek to Renjo La Pass, overnight in Camp" },
    { "19": "Trek to Gokyo Lake, overnight in Camp/Lodge" },
    { "20": "Trek to Gokyo Ri and back to Gokyo, overnight in Camp/Lodge" },
    { "21": "Trek to Thangna, overnight in Camp" },
    { "22": "Trek to Chola BC, overnight in Camp" },
    { "23": "Trek to Chola Pass and Dozongla, overnight in Camp" },
    { "24": "Trek to Lobuche, overnight in Camp/Lodge" },
    {
      "25": "Trek to Kalapathar (5450m) and back to Ghorak Shap (5100m), overnight in Camp/Lodge",
    },
    { "26": "Trek to Dingboche/Pheriche, overnight in Camp/Lodge" },
    { "27": "Trek to Tengboche, overnight in Camp/Lodge" },
    { "28": "Trek to Namche Bazar, overnight in Camp" },
    { "29": "Trek to Lukla, overnight in Camp/Lodge" },
    { "30": "Fly back to Kathmandu" },
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
