import { siteConfig } from "@/config/site";
import lumbini_header from "@/public/images/header_logo.png";
import { LocateIcon, Mail, PhoneIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-slate-50/0 to-slate-400">
        <div className="p-2 md:p-10 flex flex-col md:flex-row gap-5 items-center md:justify-between">
          <Link href={"/"}>
            <Image
              src={lumbini_header}
              alt="lumbini_header"
              className="h-18 w-64 md:h-24 md:w-80 object-contain"
            />
          </Link>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-lg md:text-xl flex items-center line-clamp-1">
                <Image
                  src="https://flagsapi.com/NP/flat/64.png"
                  alt="Nepal flag"
                  width={30}
                  height={30}
                />
                Nepal Office
              </h1>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1">
                  <LocateIcon size={18} className="text-red-500" />
                  <Link
                    href={`https://maps.app.goo.gl/hKBbNwez39qn1L6U8`}
                    target="_blank"
                  >
                    <p>Thamel, Kathmandu</p>
                  </Link>
                </span>
                <span className="flex items-center gap-1">
                  <PhoneIcon size={18} className="text-blue-500" />
                  <p>
                    <a href={`tel:+977-1-4526052`}>+977-1-4526052</a>,
                    <a href={`tel:+977-9851004171`}>+977-9851004171</a>
                  </p>
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={18} className="text-blue-500" />
                  <p>
                    <a href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </p>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-lg md:text-xl flex line-clamp-1 items-center gap-1">
                <Image
                  src="https://flagsapi.com/JP/flat/64.png"
                  alt="Japan flag"
                  width={30}
                  height={10}
                />
                Japan Office
              </h1>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1">
                  <LocateIcon size={18} className="text-red-500" />
                  <Link
                    href={`https://maps.app.goo.gl/6mmZ2KMwtLTJh9Q7A`}
                    target="_blank"
                  >
                    <p>
                      Room 102 Musisou,
                      <br /> 5-34-25 Narita Higashi,
                      <br /> Suginami-Ku, Tokyo
                    </p>
                  </Link>
                </span>
                <span className="flex items-center gap-1">
                  <PhoneIcon size={18} className="text-blue-500" />
                  <p>
                    <a href={`tel:+819093605043`}>+819093605043</a>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-2 md:px-10 py-4 border-t border-zinc-900 justify-center">
          <div className="text-sm">
            © copyright 2024. All rights reserved. Lumbini Holidays Tours &
            Travels (P). Ltd.
          </div>
        </div>
      </div>
  );
}

export default Footer;
