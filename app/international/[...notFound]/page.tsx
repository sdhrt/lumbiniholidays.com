import { Button } from "@/components/ui/button";
import logo from "@/public/images/header_logo.png";
import { Construction } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-10 px-2">
      <span>
        <Image src={logo} alt="Lumbini holidays logo and banner" width={200} />
      </span>
      <span className="text-xl font-semibold">
        This page is under construction. Check back later.
      </span>
      <span className="text-2xl font-semibold">
        <Button asChild variant={"outline"}>
          <Link href="/">Return to Home</Link>
        </Button>
      </span>
    </div>
  );
}

export default NotFound;
