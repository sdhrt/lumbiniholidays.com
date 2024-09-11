import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";

function NepalPage() {
  const bg_url =
    "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-screen">
        <div className="relative h-96">
          <Image
            alt="Nepal"
            src={bg_url}
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>
        <span className="translate-y-[-400px] flex justify-center items-center h-full text-4xl lg:text-[4rem] font-bold text-white hover:stroke-black hover:cursor-default">
          Nepal
        </span>
      </div>
      <div className="p-6 rounded-lg shadow-md my-4 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4">About Nepal</h1>
        <Separator orientation="horizontal" />
        <ul className="space-y-2 text-white">
          <li className="bg-blue-600 p-2 rounded-md">
            <span className="font-semibold">OFFICIAL NAME:</span> Federal
            Democratic Republic of Nepal
          </li>
          <li className="bg-blue-400 p-2 rounded-md">
            <span className="font-semibold">FORM OF GOVERNMENT:</span> Federal
            democratic republic
          </li>
          <li className="bg-blue-600 p-2 rounded-md">
            <span className="font-semibold">CAPITAL:</span> Kathmandu
          </li>
          <li className="bg-blue-400 p-2 rounded-md">
            <span className="font-semibold">POPULATION:</span> 29,717,587
          </li>
          <li className="bg-blue-600 p-2 rounded-md">
            <span className="font-semibold">OFFICIAL LANGUAGES:</span> Nepali,
            English
          </li>
          <li className="bg-blue-400 p-2 rounded-md">
            <span className="font-semibold">MONEY:</span> Nepalese rupee
          </li>
          <li className="bg-blue-600 p-2 rounded-md">
            <span className="font-semibold">AREA:</span> 54,363 square miles
            (140,800 square kilometers)
          </li>
          <li className="bg-blue-400 p-2 rounded-md">
            <span className="font-semibold">MAJOR MOUNTAIN RANGES:</span>{" "}
            Himalaya, Annapurna
          </li>
          <li className="bg-blue-600 p-2 rounded-md">
            <span className="font-semibold">MAJOR RIVERS:</span> Karnali, Koshi
          </li>
        </ul>
      </div>
      <div className="space-y-4 max-w-3xl hover:*:scale-[101%] mx-2">
        <section className="p-4 border-[6px] border-blue-500 rounded-[20px]">
          <h2 className="text-2xl font-semibold mb-2">Geography</h2>
          <p>
            Nepal, officially known as the Federal Democratic Republic of Nepal,
            is a landlocked country in South Asia. It is located mainly in the
            Himalayas, bordered by China to the north and India to the south,
            east, and west. The country covers an area of 54,363 square miles
            (140,800 square kilometers) and has a diverse topography, ranging
            from the lowland Terai region to the towering peaks of the
            Himalayas, including Mount Everest, the highest point on Earth.
          </p>
        </section>

        <section className="p-4 border-[6px] border-blue-500 rounded-[20px]">
          <h2 className="text-2xl font-semibold mb-2">
            Capital and Major Cities
          </h2>
          <p>
            The capital city of Nepal is Kathmandu, which is also the largest
            city. It serves as the cultural and economic hub of the country.
            Other major cities include Pokhara, known for its stunning lakes and
            as a gateway to the Annapurna circuit, and Chitwan, famous for its
            national park and wildlife.
          </p>
        </section>

        <section className="p-4 border-[6px] border-blue-500 rounded-[20px]">
          <h2 className="text-2xl font-semibold mb-2">
            Population and Language
          </h2>
          <p>
            Nepal has a population of approximately 29.7 million people. The
            official languages are Nepali and English, with Nepali being the
            most widely spoken language. The country is home to a diverse range
            of ethnic groups, cultures, and religions, contributing to its rich
            cultural heritage.
          </p>
        </section>

        <section className="p-4 border-[6px] border-blue-500 rounded-[20px]">
          <h2 className="text-2xl font-semibold mb-2">Culture and Heritage</h2>
          <p>
            Nepal boasts a rich cultural heritage with influences from Hinduism
            and Buddhism. The Kathmandu Valley alone has seven UNESCO World
            Heritage Sites, including ancient temples, palaces, and monuments.
            Festivals such as Dashain, Tihar, and Holi are celebrated with great
            enthusiasm, showcasing the country's vibrant traditions.
          </p>
        </section>

        <section className="p-4 border-[6px] border-blue-500 rounded-[20px]">
          <h2 className="text-2xl font-semibold mb-2">Tourism</h2>
          <p>
            Tourism is a major industry in Nepal, attracting adventurers and
            culture enthusiasts alike. The country offers a variety of trekking
            routes, including the famous Everest Base Camp and Annapurna Circuit
            treks. Wildlife safaris in Chitwan National Park, paragliding in
            Pokhara, and exploring the medieval cities of Bhaktapur and Patan
            are among the many attractions that draw visitors.
          </p>
        </section>

        <section className="p-4 border-[6px] border-blue-500 rounded-[20px]">
          <h2 className="text-2xl font-semibold mb-2">Economy</h2>
          <p>
            Nepal's economy is primarily based on agriculture, tourism, and
            remittances from Nepalese working abroad. The Nepalese rupee is the
            official currency. Despite being a developing country, Nepal has
            made significant strides in improving infrastructure and services in
            recent years.
          </p>
        </section>

        <section className="p-4 border-[6px] border-blue-500 rounded-[20px]">
          <h2 className="text-2xl font-semibold mb-2">
            Major Rivers and Mountains
          </h2>
          <p>
            Nepal is home to some of the world's most significant mountain
            ranges, including the Himalayas and Annapurna. Major rivers like the
            Karnali and Koshi originate in the Himalayas and flow through the
            country, providing vital resources for agriculture and hydropower.
          </p>
        </section>
      </div>
      <div className="my-4">
        <Link href={"/nepal/tours"}>
          <Button variant={"outline"} size={"lg"} className="rounded-lg">
            <span className="font-semibold text-lg">Book a Tour now</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NepalPage;

export const metadata: Metadata = {
  title: "Nepal",
  description:
    "Nepal, nestled in the Himalayas, is a dream destination for tourists. It offers a blend of adventure, culture, and natural beauty. Home to eight of the world's ten tallest mountains, including Mount Everest, it's a paradise for trekkers and mountaineers. The country is rich in cultural heritage, with ancient temples, vibrant festivals, and traditional villages. Key attractions include the UNESCO World Heritage sites in Kathmandu Valley, the serene lakes of Pokhara, and the wildlife-rich Chitwan National Park. Nepal's diverse landscapes and friendly locals make it a unique and memorable travel experience.",
};
