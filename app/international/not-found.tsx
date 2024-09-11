import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import logo from "@/public/images/header_logo.png";
import { Link } from "next-view-transitions";
import Image from "next/image";
function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-10 px-2">
      <span>
        <Image src={logo} alt="Lumbini holidays logo and banner" width={200} />
      </span>
      <Spinner size={"icon"} />
      <span className="text-2xl font-semibold">
        This page is under construction.
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
