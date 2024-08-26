import Image from "next/image";
import logo from "@/public/favicon.ico";
import NavMenu from "./NavMenu";
import { Link } from "next-view-transitions";
import { Mail, Phone } from "lucide-react";

function Nav() {
  return (
    <div className="flex flex-col md:flex-row md:px-20 py-2 justify-between items-center shadow-xl animate-down">
      <div className="flex justify-between items-center w-full px-2">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image src={logo} alt="logo" height={100} />
            <h1 className="flex flex-col font-bold md:font-semibold tracking-tight text-xl md:text-3xl">
              <span>Lumbini</span>
              <span>Holidays</span>
            </h1>
          </div>
        </Link>
        <div className="flex flex-col xl:flex-row items-center gap-2">
          <span className="text-sm text-gray-500">
            <Link
              href={`mailto:info@lumbiniholidays.com`}
              className="flex items-center gap-1"
            >
              <Mail size={18} className="text-blue-500" />

              <span className="transition hover:text-black hover:select-all">
                info@lumbiniholidays.com
              </span>
            </Link>
          </span>
          <span className="text-sm text-gray-500 line-clamp-1">
            <Link
              href={`tel:${+977 - 9851004171}`}
              className="flex items-center"
            >
              <Phone size={18} className="text-blue-500" />
              <span className="transition hover:text-black">
                +977-9851004171
              </span>
            </Link>
          </span>
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Nav;
