"use client";

import Overview from "./home/Overview";
import AboutUs from "./home/AboutUs";
import GameModes from "./home/GameModes";
import OurFeatures from "./home/OurFeatures";
import OurTechnologies from "./home/OurTechnologies";

export default function Home() {
  return (
    <div className="max-w-[2000px] mx-auto w-full">
      <Overview />
      <AboutUs />
      <GameModes />
      <OurFeatures />
      <OurTechnologies />
    </div>
  );
}
