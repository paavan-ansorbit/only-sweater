import React from "react";
import { image5, LeftArrow, RightArrow } from "../../../../../assets";
import { CardItem, ItemCard } from "../../../../components";

export const ItemsSection = () => {
  const items: CardItem[] = [
    {
      id: 1,
      image: image5,
      title: "ゆったりしたセーター",
      amount: "¥ 10,000",
    },
    {
      id: 2,
      image: image5,
      title: "ゆったりしたセーター",
      amount: "¥ 10,000",
    },
    {
      id: 3,
      image: image5,
      title: "ゆったりしたセーター",
      amount: "¥ 10,000",
    },
  ];

  return (
    <section
      id="items"
      className="flex flex-col items-center justify-center mt-40"
    >
      <div className=" text-3xl">Items</div>
      <div className="flex items-center gap-8">
        <LeftArrow />
        <div className="flex gap-8 mt-8">
          {items.map((item) => {
            return <ItemCard item={item} />;
          })}
        </div>
        <RightArrow />
      </div>
      <div className="flex gap-1 mt-8 ">
        <div className=" w-2 h-2 rounded-full  bg-gray-400" />
        <div className=" w-2 h-2 rounded-full border border-gray-300 bg-gray-300" />
        <div className=" w-2 h-2 rounded-full border border-gray-300 bg-gray-300" />
      </div>
      <div className="mt-6">
        <span className=" border-b-2 border-black pb-3">View more →</span>
      </div>
    </section>
  );
};
