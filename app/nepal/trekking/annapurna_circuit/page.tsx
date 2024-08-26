import { Metadata } from "next";
import annapurna_circuit from "@/public/images/trekking/annapurna_circuit.jpg";
import TrekkingTemplate from "../_components/TrekkingPage";

// data object contains details about the trek and is at the bottom

export default function page() {
  return <TrekkingTemplate data={data} imgsrc={annapurna_circuit} />;
}

const data = {
  title: "Annapurna Circuit trekking",
  description: `
Embark on one of the world's most renowned trekking trails, the Annapurna Circuit. This classic trek starts with a drive to Besishar and winds through lush, subtropical forests and traditional farming terraces of western Nepal. Each ridge unveils a stunning Himalayan panorama, with the majestic Annapurna and Himalchuli towering above.

The trek follows the Marshyangdi River valley, leading you close to the base of Gangapurna and into the picturesque Manang valley. Here, you will spend two unforgettable days, mesmerized by snow-covered peaks and the breathtaking landscape. Manang is a Himalayan Shangri-La, a true paradise on earth.

From Manang, you will ascend to the Thorong-la Pass (5416m), where a 360-degree view awaits you. The sense of accomplishment and the spectacular vistas will leave you in awe.

Descending from the pass, you will encounter the vibrant landscape of Mustang, a region rich in Tibetan Buddhist culture and home to warm, welcoming people. Following the Kali Gandaki Valley, the deepest gorge on Earth, you will be flanked by the towering peaks of Dhaulagiri (8169m) and Nilgiri. This ancient trade route between Nepal, India, and Tibet will take you through apple and wheat farming areas, allowing for interactions with local Thakali people and moments shared with sheep and yak herders.

Below is the related Topic and Article about Annapurna circuit Hiking you may be interested to read

On March 21, 2010 The New York Times published an article about Annapurna Circuit trek giving the headline "Last Footfall in Nepal"please read here the full article - it says Hiking the Annapurna Circuit in Nepal Before Roads Take Over - NYTimes.com and they recommended Earthbound Expeditions as one of the reputed trekking agency in Nepal to arrange such trek. 

Also read a beutifully written blog by one of our clients about Annapurna circuit trek with us in Octobert 2010 at http://thirdeyemom.com/category/travel-by-country/nepal-travel/ 

One of our clients Mr. David Ellison just uploded beutiful pictures of Annapurna circuit, the team of 4 teachers from California did Annapurna circuit trek, Rafting, Yoga and Chitwan trip with us in June 2011, please click here to view photos 

On May 27th, 2011, BBC at travel section covered an Article about Annapurna circuit - see full article about it from this link, the time to do Annapurna circuit trek is now.

****IMPROVED ROUTE**** of Annapurna circuit trek - For those who want to do 20 days Annapurna circuit trek

We have recently revised the itinerary between Muktinath and Ghorepani pooh hill for this Annapurna circuit trek to avoid the dirt-road being built along the Kali Gandaki Valley. This section of the route now follows footpaths through pretty villages away from the road, but returns to the traditional circuit villages for overnight lodge stays. Like the route will go Jomsom to Dona Lake to Marpha visting some Gompas. From Marpha it goes to Tibetan refuge camp to Chibang Tukuche . Then to Larjung Titi lake - Titi village , Taklung - Kunjo then Ghasa.

The Annapurna circuit trek you can also end in Jomsom taking flight to Pokhara, if so the trek can be shorten to 16 or 18 days. Because of the motorable road reached to Jomsom now ( although not many car or Jeep running) people prefer to fly from Jomsom to Pokhara.`,
  altitude: 5416,
  difficulty: "Moderate",
  days: 16,
  itinerary: [
    { "01": "Arrival day, check into hotel and rest. " },
    {
      "02": "Full day sightseeing of Kathmandu Valley - UNESCO world heritage sites",
    },
    {
      "03": "Drive from Kathmandu to Besi Shahar (830m/2723ft) by bus. Same day drive further and hike up to Bahundanda (1430m/4691ft). O/N at guest house",
    },
    {
      "04": "Bahundanda to Chamje (1560m/5118ft). Approx. walking 5 to 6 hours, O/N at guest house",
    },
    {
      "05-06":
        "Chamje to Chame (2725m/8940ft) via Dhararpani (1810m/5938ft) Approx. walking 5:30 to 6 hours each day , O/N at guest house",
    },
    {
      "07-08":
        "Chame to Manang (3500m/11483ft) via Pisang (3190m/10466ft). Approx. walking 5 to 6 hours each day , O/N at guest house",
    },
    {
      "09": "One day rest in Manang for acclimatization, walk around it is Himalan Shangri-la. O/N at guest house",
    },
    {
      "10-11":
        "Manang to Throung Phedi (4441m/14570ft) via Yak Kharka (4090m/13418ft). Approx. walking 4 hours each day , O/N at guest house",
    },
    {
      "12": "Throung Phedi to Muktinath (3802m/11512ft) crossing Throung-la pass(5416m/17769ft) - hightlight of this trek. Approx. walking 8:30 to 9 hours , O/N at guest house",
    },
    {
      "13": "Muktinath to Jomsom village via Kagbeni (2665m/8743ft). Approx. walking 5:30 to 6 hours, O/N at guest house",
    },
    {
      "14": "Fly to Pokhara and saty in Pokhara, explore the lake city.",
    },
    {
      "15": "Drive to Kathmandu, evening join cultural show and dinner ",
    },
    {
      "16": "Fly to your home country .",
    },
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
      "All accommodation in 3 star hotels in cities, simple lodge on trek - twin sharing rooms",
      "All Ground transportation",
      "Kathmandu sightseeing with city tour guide",
      "Full board meal during the trekking",
      "Govt. trained guide and necessary no. of porters with their insurance, salary and meals",
      "One cultural show and dinner",
      "All entry fees and TIMS permit card",
      "All Domestic Flight according to Itinerary",
      "Sleeping bag and Down jacket for trek",
    ],
    excludes: [
      "International Flight, Airport tax",
      "Major meals in Cities",
      "Monuments entrance fees",
      "All personal expenses such as bar bills, beverage, snacks etc.",
      "Extra shower, battery re-charge, laundry charge etc.",
      "Personal clothing and gears",
      "Tips to guide and porter",
      "Cost raised by cancellation, landslide, weather, political unrest, illness which are not under our control.",
    ],
  },
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};
