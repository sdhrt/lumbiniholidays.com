import { Link } from "next-view-transitions";

import bhotekoshi_image from "@/public/images/nepal/rafting/bhotekoshi.jpg";
import seti_image from "@/public/images/nepal/rafting/seti.jpg";
import sunkoshi_image from "@/public/images/nepal/rafting/sunkoshi.jpeg";
import trishuli from "@/public/images/nepal/rafting/trishuli.jpeg";
import kaligandaki_image from "@/public/images/nepal/rafting/kaligandaki.jpg";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function RaftingPage() {
  const bg_url = "/images/nepal/rafting/rafting.jpeg";
  return (
    <div className="flex flex-col">
      <div className="w-screen">
        <div className="relative h-96">
          <Image
            alt="Rafting"
            src={bg_url}
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>
        <span className="translate-y-[-400px] flex justify-center items-center h-full text-4xl lg:text-[4rem] font-bold text-white hover:cursor-default">
          Rafting
        </span>
      </div>
      <div className="p-4 md:px-16 text-sm text-muted-foreground flex flex-col gap-2">
        <span>
          Nepal has earned a reputation as one of the best destinations in the
          world for white water rafting. Nepal's thundering waters, coming from
          the glaciers of the mighty Himalaya, provide unmatched thrills for
          rafting and immersing oneself in the landscape. Rivers are graded on a
          scale of one to six, with one being a swimming pool and six a one-way
          ticket to your maker. Four is considered to be quite challenging
          without being exceedingly dangerous to the novice rafter. Five
          requires some previous river experience. Here are some of the popular
          rafting trips:
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-10 gap-8 animate-up">
        <RaftingCard
          title="Trishuli river rafting"
          days={2}
          imgsrc={trishuli}
        />
        <RaftingCard
          title="Bhote Koshi river rafting"
          days={2}
          imgsrc={bhotekoshi_image}
        />
        <RaftingCard title="Seti river rafting" days={2} imgsrc={seti_image} />
        <RaftingCard
          title="Sun Koshi river rafting"
          days={7}
          imgsrc={sunkoshi_image}
        />
        <RaftingCard
          title="Kali Gandaki river rafting"
          days={3}
          imgsrc={kaligandaki_image}
        />
      </div>
    </div>
  );
}

const RaftingCard = ({
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
        className="h-60 w-60 rounded-t-sm object-cover"
      />
      <div className="flex flex-col animate-in py-2 gap-1 *:hover:text-blue-600">
        <span className="font-semibold text-xl px-2">{title} Safari</span>
        <span className="font-semibold text-sm px-2">{days} days</span>
        <Link
          href={`rafting/${titleLink}`}
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
