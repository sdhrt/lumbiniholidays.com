import { Metadata } from "next";
import everest_base_camp from "@/public/images/trekking/everest_base_camp.jpg";
import TrekkingTemplate from "../_components/TrekkingPage";

// data object contains details about the trek and is at the bottom

export default function EverestBaseCampTrek() {
  return <TrekkingTemplate data={data} imgsrc={everest_base_camp} />;
}

const data = {
  title: "Everest Base Camp trekking",
  description: `We fly to Lukla and begin trekking through the land of the legendary Sherpas into the Sagarmatha (Everest) national park.

Since the successful ascent of Everest the Khumbu region has enjoyed the international attention. We will follow the footsteps of Tenzing Norgay, Hillary, Bonnington and Messner. We follow the classic trail to Namche bazaar, Khumjung, Pangboche and Lobuche to the Everest Base Camp and go on to Kalapathar. From Tengboche to Pangboche (3,985m) the trail rises through meadows where graze yak. After touring the monastery we set out and cross the Lobuche Khola to arrive at Pheriche. After crossing the moraines of the Changri Shar Glacier, we reach the sandy plain of Gorakshep. Then we climb up amongst large boulders to the broad summit of Kalapathar (5,545m), which offers the best view of Everest and Khumbu Glacier.

Whether it may be called Everest, Sagarmatha or Chomolungma, the highest peak of this planet is stunning to behold. The trek will end at Syangaboche or Lukla and fly out to Katmandu.`,
  altitude: 5545,
  difficulty: "Moderate",
  days: 17,
  itinerary: [
    { "01": "Arrival Kathmandu, transfer to hotel" },
    { "02": "Full day KTM City tour, hotel" },
    { "03": "Flight: KTM - Lukla - Trek 1 - Phakding" },
    { "04": "Trek 2 - Namche, camp" },
    { "05": "Trek 3 - Acclimatization day to Thame back to Namche" },
    { "06": "Trek 4 - Tengboche" },
    { "07": "Trek 5 - Acclimatization day at Tengboche" },
    { "08": "Trek 6 - Pheriche" },
    { "09": "Trek 7 - Lobuche" },
    { "10": "Trek 8 - Kalapathar - Gorakshep" },
    { "11": "Trek 9 - Everest Base Camp - Lobuche" },
    { "12": "Trek 10 - Lobuche - Tengboche" },
    { "13": "Trek 11 - Tengboche - Namche" },
    { "14": "Trek 12 - Namche - Lukla" },
    { "15": "Flight: Lukla - KTM, transfer to hotel" },
    { "16": "Kathmandu free day, hotel" },
    { "17": "Final departure, transfer to airport" },
  ],
  details: [
    "You can extend trip to Chitwan National park for 2 / 3 days, or do some white water river rafting, Everest Experience mountain flights, Can join Yoga or spa retreats etc. Ask us for full range of options.",
    "As we are flexible and run small group treks. You can choose your own departure date to join us !!",
    "The trek is guaranteed to run even we have just 1 or 2 person in the team.",
    "We can confirmed trip for Sept 17th - 16 days Annapurna circuit trek. Also other dates kindly write to find out more.",
    "The Annapurna circuit trek also can be combined with Manasalu circuit trek, ask us for details.",
    "Trekking round the Annapurnas with Tilicho lake - You can do this side trip.",
    "If you want trekking to the Tilicho lake through the village of Khangsar that is also possible.",
    "You can also reach to Jomsom by crossing Mesokanto la, but it is bit harder trek and have to be prepared.",
    "From Manang instead of taking the valley north directly to the Thorong la pass you can continue the main valley to the west and have a side trek to Tilicho lake - the highest lake in the world ( 5300 meter). You can trek Manang - Khangsar - Tilicho Basecamp lodge then to Thorong Phedi via Khangsar this will add total 3 days in your trek from Manang.",
  ],
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
      "Personal & accidental insurance",
      "If extra porters required",
      "Personal equipments",
      "Any other things not mentioned and any things occur by natural & Political",
    ],
  },
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
