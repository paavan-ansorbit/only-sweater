import React from "react";

export interface CardItem {
  id: number;
  image: string;
  title: string;
  amount: string;
}

export interface ItemCardProps {
  item: CardItem;
}

export const ItemCard: React.FC<ItemCardProps> = (props) => {
  const { image, title, amount } = props.item;
  return (
    <div className="">
      <img src={image} alt="" />
      <div className="flex gap-1 mt-2">
        <div className=" w-3 h-3 rounded-full border border-gray-300 " />
        <div className=" w-3 h-3 rounded-full border border-gray-300 bg-gray-300" />
        <div className=" w-3 h-3 rounded-full  bg-gray-400" />
        <div className=" w-3 h-3 rounded-full  herosection_bg" />
        <div className=" w-3 h-3 rounded-full bg-blue-200" />
      </div>
      <div className="mt-2 text-gray-500">{title}</div>
      <div className=" text-right text-gray-600">{amount}</div>
    </div>
  );
};
