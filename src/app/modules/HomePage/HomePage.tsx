import React from "react";
import {
  AboutUs,
  ContactUs,
  Footer,
  GallerySection,
  HeroSection,
  InfoSection,
  ItemsSection,
  Navbar,
} from "./components";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ItemsSection />
      <InfoSection />
      <ContactUs />
      <GallerySection />
      <Footer />
    </>
  );
};
