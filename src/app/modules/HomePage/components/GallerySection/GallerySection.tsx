import React from "react";
import { image6, image7 } from "../../../../../assets";

export interface GallerySectionProps {}

export const GallerySection: React.FC<GallerySectionProps> = () => {
  return (
    <div id="gallery" className="flex justify-center relative mt-52">
      <img
        src={image7}
        alt=""
        className="w-full h-80"
        style={{ opacity: 0.7 }}
      />
      <img src={image6} alt="" className="absolute h-80" />
    </div>
  );
};
