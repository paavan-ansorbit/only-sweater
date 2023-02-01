import React from "react";
import { logo } from "@app/assets/pngs";
import { Facebook, Instagram } from "@app/assets";

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header id="nav">
      <nav className="flex items-center justify-between px-6 py-8">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <div className=" break-keep flex mt-2 text-sm ml-4">
            We sell only sweaters
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>
              <a href="#about" className="hover:underline p-4">
                About
              </a>
            </li>
            <li>
              <a href="#items" className="hover:underline p-4">
                Item
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline p-4">
                Shop
              </a>
            </li>
            <li>
              <a href="#info" className="hover:underline p-4">
                Info
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline p-4">
                Press
              </a>
            </li>
          </ul>
          <span className="flex ml-16 gap-4">
            <Instagram />
            <Facebook />
          </span>
        </div>
      </nav>
    </header>
  );
};
