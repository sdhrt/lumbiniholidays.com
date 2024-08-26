import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import Logo from "@/public/favicon.ico";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-5">
      <Image src={Logo} alt="Lumbini tours and travels" />
      <h1 className="font-semibold text-xl">Lumbini Tours and Travels</h1>
      <Spinner size={"lg"} />
    </div>
  );
}
