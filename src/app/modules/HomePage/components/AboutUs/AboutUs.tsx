import React from "react";
import { image4 } from "@app/assets";

export const AboutUs = () => {
  return (
    <section id="about" className="container mx-auto mt-40">
      <div className="flex">
        <div className=" flex-3">
          <img src={image4} alt="" />
        </div>
        <div className="flex flex-4 flex-col relative  items-center">
          <div className="">
            <div className="absolute left-0 right-0 bottom-0 min-h-full rounded-full border border-dotted border-slate-400"></div>
          </div>
          <div className="text-2xl font-medium text-gray-700 mt-20">About</div>
          <div className="flex flex-col pl-16 pr-8 pt-8 gap-4 text-gray-400 text-sm">
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
          <div className="pt-10 w-full pl-16">
            <span className=" border-b border-gray-500 text-gray-500 pb-1  ">
              View more →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
