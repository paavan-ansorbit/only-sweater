import React from "react";
import {
  AboutUs,
  ContactUs,
  GallerySection,
  HeroSection,
  InfoSection,
  ItemsSection,
} from "../";

export interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ItemsSection />
      <InfoSection />
      <ContactUs />
      <GallerySection />
    </>
  );
};
