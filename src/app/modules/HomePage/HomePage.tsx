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

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
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
