import { Link } from "next-view-transitions";

import bardia_image from "@/public/images/nepal/safari/bardia.jpg";
import shuklaphanta_image from "@/public/images/nepal/safari/shuklaphanta.jpg";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function TrekkingPage() {
  const bg_url = "/images/nepal/safari/safari.jpg";
  return (
    <div className="flex flex-col">
      <div className="w-screen">
        <div className="relative h-96">
          <Image
            alt="Safari"
            src={bg_url}
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>
        <span className="translate-y-[-400px] flex justify-center items-center h-full text-4xl lg:text-[4rem] font-bold text-white hover:cursor-default">
          Safari
        </span>
      </div>
      <div className="p-4 md:px-16 text-sm text-muted-foreground flex flex-col gap-2">
        <span>
          While the high Himalaya makes up Nepal's northern region, the southern
          lowland known as the Terai is covered with dense tropical jungles
          teeming with diverse wildlife and exotic birds. Here you will find
          some of the most exciting safari destinations in the world. You will
          be going into deep jungle on elephant back or four-wheel drive vehicle
          to view wild animals in their natural habitat. Other thrills are canoe
          rides on the jungle rivers, nature walks, bird watching excursions,
          and village tours.
        </span>
        <span>
          Among the 14 national parks and wildlife reserves in the Kingdom, the
          Chitwan National Park (932 sq km) is the most popular safari
          destination. More than 43 species of animals are found in Chitwan. The
          endangered one-homed rhino, Royal Bengal tiger, Gharial crocodile,
          four-horned antelope, striped hyena, and the Gangetic dolphin are the
          main attractions here. Jungle Safari.
        </span>
        <span>
          The best part is that it is close to Kathmandu and easily accessible
          (only 165 km overland), and Bharatpur airport adjoining the park is a
          mere 25-minute flight away (there are daily flights from Kathmandu).
          Many adventurers also choose to go down by raft. However you go, a
          jungle safari is an experience you will remember for a long time.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-10 gap-8 animate-up">
        <SafariCard
          title="Bardia National Park"
          days={3}
          imgsrc={bardia_image}
        />
        <SafariCard
          title="Shuklaphanta National Park"
          days={4}
          imgsrc={shuklaphanta_image}
        />
      </div>
    </div>
  );
}

const SafariCard = ({
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
        className="h-60 w-60 rounded-t-sm object-cover object-right"
      />
      <div className="flex flex-col animate-in py-2 gap-1 *:hover:text-blue-600">
        <span className="font-semibold text-xl px-2">{title} Safari</span>
        <span className="font-semibold text-sm px-2">{days} days</span>
        <Link
          href={`safari/${titleLink}`}
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
