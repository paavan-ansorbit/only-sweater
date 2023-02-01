import React from "react";

export interface BgCricleProps {}

export const BgCricle = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="504"
      height="504"
      {...props}
      viewBox="0 0 504 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="252"
        cy="252"
        r="251.5"
        stroke="#C5C5C5"
        stroke-dasharray="2 2"
      />
    </svg>
  );
};
