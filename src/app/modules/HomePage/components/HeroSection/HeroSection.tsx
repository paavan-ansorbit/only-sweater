import React from "react";
import { image1, image2, image3, logo } from "../../../../../assets";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero">
      <div className="flex justify-center px-12">
        <img src={image1} alt="" className="mt-8 w-1/3" />
        <div className="flex flex-col justify-between  w-1/3">
          <img src={logo} alt="" className="w-full" />
          <img src={image2} alt="" className="flex-1" />
        </div>
        <img src={image3} alt="" className="mt-4  w-1/3" />
      </div>
      <div className=" herosection_bg text-white text-center py-2">
        新規登録で１０％オフキャンペーン実施中！
      </div>
    </section>
  );
};
