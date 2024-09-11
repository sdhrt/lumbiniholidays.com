import { Link } from "next-view-transitions";
import Image from "next/image";
import NATTAlogo from "@/public/images/registered/NATTA.png";
import IATA from "@/public/images/registered/IATA.jpg";
import PATA from "@/public/images/registered/PATA.png";
import NTB from "@/public/images/registered/NTB.jpg";

export default function Register() {
  return (
    <div className="flex justify-center flex-col items-center py-10">
      <span className="font-semibold tracking-tighter text-xl">
        Registered with:
      </span>
      <div className="flex gap-5 m-4 items-center">
        <Link href="https://ntb.gov.np/" target="_blank">
          <Image src={NTB} alt="NTB" className="w-20 h-20 object-contain" />
        </Link>
        <Link href="https://natta.org.np/" target="_blank">
          <Image src={NATTAlogo} alt="NATTA" className="w-20 h-20 object-contain" />
        </Link>
        <Link href="https://www.iata.org/" target="_blank">
          <Image src={IATA} alt="IATA" className="w-20 h-20 object-contain" />
        </Link>
        <Link href="https://www.pata.org/" target="_blank">
          <Image src={PATA} alt="PATA" className="w-20 h-20 object-contain" />
        </Link>
      </div>
    </div>
  );
}
