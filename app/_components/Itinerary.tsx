"use client";
import React, { useRef } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Data } from "./Template";
import { PrinterIcon } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import companyHeader from "@/public/images/header_logo.png";
import { toast } from "@/hooks/use-toast";

export default function Itinerary({ itineraryData }: { itineraryData: Data }) {
  const itineraryRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => itineraryRef.current,
    documentTitle: `${itineraryData.title} - Lumbini Holidays`,
    onPrintError: (error) =>
      toast({
        title: "Something went wrong when printing",
        description: `${error.substring(0, 100)}`,
      }),
  });
  return (
    itineraryData.itinerary && (
      <div className="mt-4 md:mt-10 mx-2" ref={itineraryRef}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight py-2">
            Itinerary
            <span className="hidden print:block text-muted-foreground">
              {itineraryData.title}
            </span>
          </h2>
          <div className="hidden print:block scale-50">
            <Image alt="lumbini holidays logo" src={companyHeader} />
          </div>
          <div
            className="p-2 rounded-md hover:bg-gray-100 flex gap-2 print:hidden hover:cursor-pointer"
            onClick={handlePrint}
          >
            <div className="hidden md:block">Print </div>
            <PrinterIcon />
          </div>
        </div>
        <Table>
          <TableCaption>Itinerary of {itineraryData.title}</TableCaption>
          <TableBody>
            {itineraryData.itinerary.map((day, index) => {
              const [dayNumber, dayDesc] = Object.entries(day)[0];
              return (
                <TableRow
                  key={index}
                  className="h-14 border-t-gray-400 border-t"
                >
                  <TableCell className="whitespace-nowrap font-semibold">
                    {`• Day ${dayNumber}`}
                  </TableCell>
                  <TableCell className="">{dayDesc}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    )
  );
}
