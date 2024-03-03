import React from "react";
import { HeroContent } from "../sub/HeroContent";

export const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute top-[-170px] left-0 object-cover h-full w-full z-[1]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};
Hero.displayName = "Hero";
