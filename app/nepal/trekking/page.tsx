"use client";

import { Link } from "next-view-transitions";

import annapurna_circuit from "@/public/images/trekking/annapurna_circuit.jpg";
import everest_base_camp from "@/public/images/trekking/everest_base_camp.jpg";
import gokyo_ebc from "@/public/images/trekking/gokyo_ebc.jpg";
import gokyo_chola from "@/public/images/trekking/gokyo_chola.jpg";
import tashi_lapcha from "@/public/images/trekking/tashi_lapcha.jpeg";
import jiri_everest from "@/public/images/trekking/jiri_everest.jpg";
import langtang_valley from "@/public/images/trekking/langtang_valley.jpg";
import langtang_gosainkunda from "@/public/images/trekking/langtang_gosaikunda.jpg";
import helambu_trek from "@/public/images/trekking/helambu_trek.jpg";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function TrekkingPage() {
  const bg_url =
    "https://images.pexels.com/photos/1098395/pexels-photo-1098395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div className="flex flex-col">
      <div className="w-screen">
        <div className="relative h-96">
          <Image
            alt="Trekking"
            src={bg_url}
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>
        <span className="translate-y-[-200px] flex justify-center items-center h-full text-4xl lg:text-[4rem] font-bold text-white hover:cursor-default">
          Trekking in Nepal
        </span>
      </div>
      <div className="p-4 md:px-16 text-sm text-muted-foreground flex flex-col gap-2">
        <span>
          We have possessed the mastery on distinguishing the enigma of
          mountains; hearing the charismatic sounds composed by our ancestors
          into those cultural heritages: and inspecting the biological
          diversities veiled behind the tropical woodlands; and we have been
          sharing this great experience with the entire world. This is what we
          are – always in an attempt to offer the best stand to experience an
          exclusive and adventurous trekking in Nepal.
        </span>
        <span>
          Trekking in Nepal is a fantastic experience, and no can be the best
          partner than the Highlanders. A company bearing genuine tourism
          ethics, Highlander has always been well aware of, and promoting Eco
          and Sustainable Tourism. This is not only what we say but exceed in
          practice.
        </span>
        <span>
          Trek and travel together with us and release yourself into the amalgam
          where proficiency meets the Himalayan spirit. Trekking in Nepal begins
          with Highlander.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-10 gap-8 animate-up">
        <TrekkingCard
          title="Annapurna Circuit"
          days={16}
          imgsrc={annapurna_circuit}
        />
        <TrekkingCard
          title="Everest Base Camp"
          days={17}
          imgsrc={everest_base_camp}
        />
        <TrekkingCard
          title="Gokyo Everest Base Camp"
          days={22}
          imgsrc={gokyo_ebc}
        />
        <TrekkingCard title="Gokyo Chola Pass" days={17} imgsrc={gokyo_chola} />
        <TrekkingCard
          title="Tashi Lapcha Pass"
          days={30}
          imgsrc={tashi_lapcha}
        />
        <TrekkingCard
          title="Jiri Everest Base Camp"
          days={21}
          imgsrc={jiri_everest}
        />
        <TrekkingCard
          title="Langtang Valley"
          days={11}
          imgsrc={langtang_valley}
        />
        <TrekkingCard
          title="Langtang Gosaikunda"
          days={12}
          imgsrc={langtang_gosainkunda}
        />
        <TrekkingCard title="Helembu" days={15} imgsrc={helambu_trek} />
      </div>
    </div>
  );
}

const TrekkingCard = ({
  title,
  days,
  imgsrc: img,
}: {
  title: string;
  days: number;
  imgsrc: StaticImageData;
}) => {
  const titleLink = title.toLowerCase().replace(/ /g, "_");
  return (
    <div className="flex flex-col w-fit rounded-md shadow-md hover:shadow-lg max-w-60 md:hover:translate-y-[-0.5rem] transition-all hover:ease-out hover:cursor-default hover:duration-200">
      <Image
        src={img}
        alt={title}
        className="h-60 w-60 object-cover rounded-t-sm object-center"
      />
      <div className="flex flex-col animate-in py-2 gap-1 *:hover:text-blue-600">
        <span className="font-semibold text-xl md:text-2xl px-2">
          {title} Trek
        </span>
        <span className="font-semibold text-sm px-2">{days} days</span>
        <Link
          href={`trekking/${titleLink}`}
          className="md:group flex items-center mx-2 py-2 px-4 text-sm font-semibold border bg-orange-400 md:hover:bg-green-600 rounded-sm"
        >
          <span className="text-white flex">
            Explore Now
            <ArrowUpRight className="group-hover:scale-110" />
          </span>
        </Link>
      </div>
    </div>
  );
};
