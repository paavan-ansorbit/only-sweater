import React from "react";
import { image4 } from "../../../../../assets";

export const AboutUs = () => {
  return (
    <div className="flex justify-center mt-40">
      <div className="flex w-4/6">
        <img src={image4} alt="" />
        <div className="flex flex-col relative">
          <div className="">
            <div className=" ml-8 absolute border-dotted h-96 w-96 border-slate-400 border-2 rounded-full"></div>
          </div>
          <div>About</div>
          <div className="flex flex-col">
            <span>
              着るだけで心が満たされていくそんなセーターを作るために
              セーターだけを販売するOnly Sweaterを立ち上げました。
            </span>
            <span>
              冬の季節にしか着ないセーターだけれど、
              少しこだわるだけで今年の冬を特別なものにしてもらえるように
              細部までこだわって作りました。
            </span>
            <span>あなたの冬が特別なものになりますように...</span>
          </div>
          <div>
            <span className=" border-b-2 border-black"> View more →</span>
          </div>
        </div>
      </div>
    </div>
  );
};
