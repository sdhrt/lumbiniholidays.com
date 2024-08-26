import { Arrow } from "./_components/Arrow";
import Hero from "./_components/Hero";
import Register from "./_components/Register";
import { Spotlight } from "./_components/Spotlight";
import TourMarquee from "./_components/TourMarquee";
import Vehicle from "./_components/Vehicle";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <Hero />
      <Arrow />
      <TourMarquee />
      <Spotlight />
      <Vehicle />
      <Register />
    </main>
  );
}
