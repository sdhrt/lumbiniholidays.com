import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import Features from "./Features";

function Hero() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between p-4 md:px-32 md:py-10 bg-gradient-to-tl from-sky-400 to-blue-800">
        <div className="flex flex-col items-center">
          <HeroImage />
        </div>
        <HeroText />
      </div>
      <Features />
    </div>
  );
}

export default Hero;
