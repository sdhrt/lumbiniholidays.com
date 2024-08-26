"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { ChangeEvent } from "react";
import { DatePicker } from "./DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryList } from "@/data/countries";

export default function ContactForm({ title }: { title: string }) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [nationality, setNationality] = React.useState();
  const [arrivalDate, setArrivalDate] = React.useState<Date>();
  const [departureDate, setDepartureDate] = React.useState<Date>();

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-500 hover:bg-black hover:text-white">
            Inquire
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Inquire about {title}?</DialogTitle>
            <DialogDescription>
              Leave your contact information to get more details about {title}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 *:gap-2">
            <div className="flex justify-between items-center ">
              <Label htmlFor="firstName" className="whitespace-nowrap w-[35%]">
                First Name:
              </Label>
              <Input
                autoComplete="given-name"
                id="firstName"
                name="firstName"
                onChange={handleFormChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <Label htmlFor="lastName" className="whitespace-nowrap w-[35%]">
                Last Name:
              </Label>
              <Input
                autoComplete="family-name"
                id="lastName"
                name="lastName"
                onChange={handleFormChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <Label htmlFor="phoneNum" className="whitespace-nowrap w-[35%]">
                Email :
              </Label>
              <Input
                autoComplete="email"
                type="email"
                id="email"
                name="email"
                onChange={handleFormChange}
              />
            </div>
            <div className="flex items-center">
              <Label htmlFor="lastName" className="whitespace-nowrap w-[35%]">
                Nationality:
              </Label>
              <NationaltitySelect handleNationalityChange={setNationality} />
            </div>
            <div className="*:flex *:items-center *:whitespace-nowrap flex flex-col gap-2">
              <div>
                <Label htmlFor="arrivalDate" className="w-[35%]">
                  Arrival Date:{" "}
                </Label>
                <DatePicker date={arrivalDate} setDate={setArrivalDate} />
              </div>
              <div>
                <Label htmlFor="departureDate" className="w-[35%]">
                  Departure Date:{" "}
                </Label>
                <DatePicker date={departureDate} setDate={setDepartureDate} />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Label htmlFor="message" className="whitespace-nowrap w-[35%]">
                Message :
              </Label>
              <Textarea
                id="message"
                name="message"
                onChange={handleFormChange}
              />
            </div>
            <Button variant={"outline"}>Inquire</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const NationaltitySelect = ({
  handleNationalityChange,
}: {
  handleNationalityChange: any;
}) => {
  return (
    <Select onValueChange={handleNationalityChange} name="nationality">
      <SelectTrigger className="w-[65%]">
        <SelectValue placeholder="Nationality" />
      </SelectTrigger>
      <SelectContent>
        {countryList.map((country, index) => (
          <SelectItem value={`${country}`} key={index}>
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
