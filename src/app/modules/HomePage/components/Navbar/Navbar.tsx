import React from "react";
import { Facebook, Instagram } from "../../../../../assets";
import { logo } from "../../../../../assets/pngs";

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="mt-4 mx-5 mb-8 flex justify-between align-middle">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <div className=" break-keep flex mt-2 text-sm ml-4">
          We sell only sweaters
        </div>
      </div>
      <div className="flex items-center">
        <span className="flex gap-16">
          <span>About</span>
          <span>Item</span>
          <span>Shop</span>
          <span>Info</span>
          <span>Press</span>
        </span>
        <span className="flex ml-16 gap-4">
          <Instagram />
          <Facebook />
        </span>
      </div>
    </div>
  );
};
