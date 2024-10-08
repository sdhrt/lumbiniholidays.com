// This template is used across the website in order to show treks, tours and more.
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeDollarSignIcon,
  CircleCheck,
  CircleSlash,
  Clock,
  HeartPulse,
  Mountain,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import ContactForm from "@/app/_components/ContactForm";
import Itinerary from "./Itinerary";

export interface ItineraryItem {
  [key: string]: string | undefined;
}

interface Service {
  includes: string[];
  excludes: string[];
}

export interface Data {
  title: string;
  description: string;
  altitude?: number;
  difficulty?: string;
  price?: number;
  days?: number;
  itinerary?: ItineraryItem[];
  details?: string[];
  service: Service;
}

export default function Template({
  data,
  imgsrc,
}: {
  data: Data;
  imgsrc: StaticImageData;
}) {
  return (
    <div className="mt-4 md:mt-20 mx-2 md:mx-14 lg:mx-32 mb-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-4 *:justify-center *:md:justify-normal">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-wide flex">
            {data.title}
          </h1>
          <div className="flex gap-2 md:gap-8 *:flex *:items-center *:gap-1">
            {data.price && (
              <span>
                <BadgeDollarSignIcon className="text-green-600" />
                {data.price} per person
              </span>
            )}
            {data.altitude && (
              <span>
                <Mountain className="text-blue-500" />
                {data.altitude} m.
              </span>
            )}
            {data.difficulty && (
              <span>
                <HeartPulse className="text-red-500" />
                {data.difficulty}
              </span>
            )}
            {data.days && (
              <span>
                <Clock className="text-green-600" />
                {data.days} days
              </span>
            )}
          </div>
        </div>
        <span className="flex justify-center mt-4">
          <ContactForm title={data.title} />
        </span>
      </div>

      <div className="mt-4 lg:mt-8 flex justify-center">
        <Image
          src={imgsrc}
          alt={data.title}
          className="rounded-lg shadow-lg md:w-[50%]"
        />
      </div>

      <div className="mt-4 lg:mt-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="Description">
            <AccordionTrigger>Description of the trek</AccordionTrigger>
            <AccordionContent className="text-sm whitespace-pre-wrap">
              {data.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {data.itinerary && <Itinerary itineraryData={data} />}

      {data.service && (
        <div className="mt-4 lg:mt-14 text-sm *:mt-4">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight py-2">
            Services
          </h2>
          <div className="">
            <span className="text-lg lg:text-xl font-semibold tracking-tight text-muted-foreground">
              Includes
            </span>
            <ul className="mt-2">
              {data.service.includes.map((include, index) => (
                <li key={index} className="flex gap-2">
                  <CircleCheck className="text-green-600" />
                  <span className="w-80 md:w-max">{include}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-lg lg:text-xl font-semibold tracking-tight text-muted-foreground">
              Excludes
            </span>
            <ul className="mt-2">
              {data.service.excludes.map((exclude, index) => (
                <li key={index} className="flex gap-2">
                  <CircleSlash className="text-red-500" />
                  <span className="w-80 md:w-max">{exclude}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {data.details && (
        <div className="mt-4">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight py-2">
            Additional Details
          </h2>
          <ul className="flex flex-col gap-2">
            {data.details.map((detail, index) => (
              <li
                key={index}
                className="text-sm tracking-tight"
              >{`• ${detail}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
