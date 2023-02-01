import { InfoArrow } from "@app/assets";
import React from "react";

export interface CardInfo {
  id: number;
  title: string;
  date: string;
}

export interface InfoCardProps {
  item: CardInfo;
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { title, date } = props.item;
  return (
    <div className="flex gap-64 text-gray-500   items-center justify-between border-b   border-gray-200 pb-8">
      <div>
        <div>{title}</div>
        <div className="text-gray-400 text-xs">{date}</div>
      </div>
      <InfoArrow />
    </div>
  );
};
