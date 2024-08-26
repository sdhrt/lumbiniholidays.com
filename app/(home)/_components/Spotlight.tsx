import { Link } from "next-view-transitions";
import Image, { StaticImageData } from "next/image";
import annapurna_circuit_image from "@/public/images/trekking/annapurna_circuit.jpg";
import everest_base_camp_image from "@/public/images/trekking/everest_base_camp.jpg";
import chitlang_tour_image from "@/public/images/chitlang.jpg";

export const Spotlight = () => {
  return (
    <div className="flex flex-col m-4 md:mx-24 lg:mx-32 gap-2 md:gap-4">
      <h2 className="font-bold text-2xl md:text-3xl tracking-tight text-neutral-900 flex justify-center">
        Lumbini Holidays Spotlight
      </h2>
      <div className="text-sm tracking-tighter text-muted-foreground mx-4">
        Discover the latest adventures at Lumbini Holidays! Stay ahead with
        fresh travel news, exclusive deals, and special offers that make your
        next journey unforgettable. Don't miss out on what's happening in the
        world of travel!
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 lg:gap-0">
        <SpotlightCard
          url="/nepal/trekking/annapurna_circuit"
          title="Annapurna Circuit"
          image={annapurna_circuit_image}
          description="The Annapurna Circuit is a renowned trekking route in Nepal, offering a diverse and scenic journey around the Annapurna massif. This trek takes you through a variety of landscapes, from lush subtropical forests to arid high-altitude deserts."
        />
        <SpotlightCard
          url="/nepal/trekking/everest_base_camp"
          title="Everest Base Camp"
          image={everest_base_camp_image}
          description="Everest Base Camp trekking is a thrilling adventure that takes you through the heart of the Himalayas. This iconic trek offers breathtaking views of snow-capped peaks, including Mount Everest, and immerses you in the rich Sherpa culture."
        />
        <SpotlightCard
          url="/nepal/tours/chitlang"
          title="Chitlang Tour"
          image={chitlang_tour_image}
          description="Chitlang is a picturesque village located in the Makwanpur district of Nepal, known for its serene landscapes and rich cultural heritage. Surrounded by lush green hills, terraced fields, and ancient temples, Chitlang offers a peaceful retreat from the hustle and bustle of city life."
        />
      </div>
    </div>
  );
};

export const SpotlightCard = ({
  title,
  image,
  description,
  url,
}: {
  title: string;
  image: StaticImageData;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={url}
      className="flex flex-col gap-4 w-80 lg:w-[25%] rounded-md border hover:shadow-lg hover:cursor-pointer transition-all hover:translate-y-[-0.5rem]"
    >
      <Image
        src={image}
        alt={title}
        className="w-[100%] h-[200px] rounded-md"
      />
      <h1 className="texl-xl font-semibold px-4">{title}</h1>
      <p className="text-sm tracking-tighter text-muted-foreground px-4 pb-2 leading-4 md:leading-normal">
        {description}
      </p>
    </Link>
  );
};
