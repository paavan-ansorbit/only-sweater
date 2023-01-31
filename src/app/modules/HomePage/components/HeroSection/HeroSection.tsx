import React from "react";
import { image1, image2, image3, logo } from "../../../../../assets";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={image1} alt="" className="mt-8" />
        <div className="flex flex-col justify-between">
          <img src={logo} alt="" className="w-full" />
          <img src={image2} alt="" className="" />
        </div>
        <img src={image3} alt="" className="mt-4" />
      </div>
      <div className=" herosection_bg text-white text-center py-2">
        新規登録で１０％オフキャンペーン実施中！
      </div>
    </div>
  );
};
