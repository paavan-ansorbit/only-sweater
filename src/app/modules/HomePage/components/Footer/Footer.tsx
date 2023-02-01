import { image6 } from "@app/assets";
import { Facebook, Instagram } from "@app/assets/svgs";
import React from "react";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="footer" className="flex justify-center">
      <div className="w-4/5">
        <header>
          <nav className="flex items-center justify-between px-6 py-8">
            <div className="flex items-center">
              <img src={image6} alt="logo" />
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
        <div className=" text-gray-600">
          <div>Tel: 0312345678</div>
          <div>Email: onlysweater@jp.com</div>
        </div>
        <div className="flex justify-center mt-8 border-t pt-4">
          <span className="text-sm mb-6	">2022@only sweater</span>
        </div>
      </div>
    </footer>
  );
};
