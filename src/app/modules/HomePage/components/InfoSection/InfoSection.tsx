import React from "react";
import { CardInfo, InfoCard } from "../../../../components";

export interface InfoSectionProps {}

export const InfoSection: React.FC<InfoSectionProps> = () => {
  const items: CardInfo[] = [
    {
      id: 1,
      title: "2022ウィンターコレクション発表のお知らせ",
      date: "2022/10/01",
    },
    {
      id: 2,
      title: "2022ウィンターコレクション発表のお知らせ",
      date: "2022/10/01",
    },
    {
      id: 3,
      title: "2022ウィンターコレクション発表のお知らせ",
      date: "2022/10/01",
    },
  ];

  return (
    <section
      id="info"
      className="flex flex-col items-center justify-center mt-40"
    >
      <div className=" w-3/5">
        <div className=" text-3xl">Info</div>
        <div className="flex flex-col gap-8 mt-8">
          {items.map((item) => {
            return <InfoCard item={item} />;
          })}
        </div>
        <div className="flex justify-center">
          <div className="mt-6">
            <span className=" border-b-2 border-black pb-3">View more →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
