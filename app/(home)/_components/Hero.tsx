import { Button } from "@/components/ui/button";
import { HardHat, Headset, PlaneTakeoff, Settings } from "lucide-react";
import { Link } from "next-view-transitions";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between p-4 md:px-32 md:py-10 bg-gradient-to-tl from-sky-400 to-blue-800">
        <div className="flex flex-col items-center">
          <div className="px-4 flex justify-between gap-2">
            <div className="bg-[url('/images/boudhanath.webp')] bg-no-repeat bg-cover bg-center clipped w-auto overflow-x-clip transition hover:scale-[105%]">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <clipPath id="heroClip">
                  <path
                    d="M0.5 0.5H295C352.714 0.5 399.5 47.2862 399.5 105V399.5H105C47.2862 399.5 0.5 352.714 0.5 295V0.5Z"
                    stroke="white"
                  />
                </clipPath>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4 md:max-w-[80%] flex flex-col items-center md:items-start justify-center gap-4">
          <h1 className="text-[1.8rem] md:text-[3rem] tracking-tight leading-[2rem] md:leading-[2.8rem] font-semibold text-[#023047]">
            WELCOME TO LUMBINI HOLIDAYS
          </h1>
          <p className="text-[10px] md:text-sm text-gray-800">
            A leading tours company offering tailor-made Tours and Trekking with
            adventure from the spectacular Himalayas to wildlife safari, variety
            of flora, fauna and exotic cultures.
          </p>
          <div>
            <Link href="/nepal/tours">
              <Button className="bg-[#ffb703] text-[#023047] hover:text-white">
                Book a tour now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#023047] grid grid-cols-1 md:grid-cols-2 place-items-center p-4 md:p-10 text-white text-lg md:text-xl md:m-20 md:translate-y-[-6rem] md:rounded-3xl">
        <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1">
          <Headset />
          24/7 support
        </div>
        <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1 ">
          <HardHat />
          Safety
        </div>
        <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1">
          <Settings />
          Customizable Program
        </div>
        <div className="mx-4 py-4 md:py-8 rounded-md flex items-center gap-1">
          <PlaneTakeoff />
          Private Departure
        </div>
      </div>
    </div>
  );
}

export default Hero;
