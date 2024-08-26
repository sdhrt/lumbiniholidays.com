import { Metadata } from "next";
import React from "react";
import TrekkingTemplate from "../_components/TrekkingPage";
import langtang_valley_jpg from "@/public/images/trekking/langtang_valley.jpg";

export default function page() {
  return (
    <div>
      <TrekkingTemplate data={data} imgsrc={langtang_valley_jpg} />
    </div>
  );
}

const data = {
  title: "Langtang Valley Trekking",
  description: `The Langtang valley is aptly called " the valley of glaciers". Here the mountain - scape is spectacular. On either side of valley, mountains rise, soaring into the sky. The valley offers pine forest, slow moving rivers and swift mountain streams, rugged rock and snow-capped peaks, grassy downs and meadows strewn with daisies and wild primulas.In the upper part of the valley there are snow bridges spanning angry torrents, high passes enveloped in mist, tiny lakes with icebergs floating on them and water of crystalline brightness. There are also high mountains of solid ice.`,
  altitude: 3800,
  difficulty: "Moderate",
  days: 11,
  itinerary: [
    {
      "01": "Welcome to Kathmandu: Arrive at Tribhuvan International Airport, transfer to hotel, visit Swayambhunath Stupa, dinner, and overnight stay at the hotel",
    },
    {
      "02": "Full day Kathmandu sightseeing: Breakfast at the hotel, explore Kathmandu heritage sites (Kathmandu Durbar Square, Boudhanath, and Pashupatinath), dinner, and overnight stay at the hotel",
    },
    {
      "03": "Drive to Syabrubesi: Breakfast at the hotel, 8-hour drive to Syabrubesi, lunch on the way, check-in at Syabrubesi hotel, dinner, and overnight stay",
    },
    {
      "04": "Trek to Lama Hotel from Syabrubesi: Breakfast at the hotel, trek (3-4 hours) to Bamboo for lunch, continue trekking (3 hours) to Lama Hotel, dinner, and overnight stay",
    },
    {
      "05": "Trek to Langtang Village from Lama Hotel: Breakfast at the hotel, trek (3 hours) to Ghodatabela for lunch, continue trekking (3 hours) to Langtang Village, dinner, and overnight stay",
    },
    {
      "06": "Trek to Kyangjin Gumba from Langtang Village: Breakfast at the hotel, trek (3-4 hours) to Kyangjin Gumba, explore the area (lake and gumba), dinner, and overnight stay",
    },
    {
      "07": "Ascend to Kyangjin Ri: Early morning ascent (3 hours) to Kyangjin Ri for a panoramic view of Langtang Peak, descend (2 hours) back to the hotel, dinner, and overnight stay",
    },
    {
      "08": "Descend to Lama Hotel: Breakfast, descend (6-7 hours) to Lama Hotel, lunch at Ghoda Tabela, continue steep descent, dinner, and overnight stay at the hotel",
    },
    {
      "09": "Descend to Syabrubesi: Breakfast, trek (6 hours) back to Syabrubesi, lunch on the way at Ghodatabela, celebrate completion of Langtang trek with local songs and dance, dinner, and overnight stay at the hotel",
    },
    {
      "10": "Drive back to Kathmandu: Early breakfast at the hotel, 8-hour drive to Kathmandu, lunch on the way, dinner at a Thakali restaurant, and overnight stay at the hotel",
    },
    {
      "11": "Depart from Kathmandu: Pickup from the hotel, transfer to the airport for final departure, leaving with blessings and memories of the Himalayas and Nepal trip",
    },
  ],
  details: [],
  service: {
    includes: [
      "Airport pick up & drop",
      "Trekking guide",
      "One porter for each two clients in tea-house trek, required cook, trek crews & porters in tent trek",
      "Insurance, lodging, food & allowance for your trek crews",
      "Tent & mattress for tent trekking",
      "All meals as per itinerary",
      "Land transportation as per itinerary",
      "All accommodation as per itinerary",
      "Trekking Permit & National Park Fee",
    ],
    excludes: [
      "International airfares & war insurance",
      "The cost of personal items like laundry & all kinds of soft & hard drinks",
      "Optional excursions",
      "Cost of visas, insurance charges & passports where necessary",
      "Gratuities for services provided on a personal basis",
      "The single supplement payable on all bookings where only one person is traveling",
      "All others except committed to provide in ‘cost included’ section above",
    ],
  },
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
