import React from "react";
import Navbar from "./component/navbar";
import HeroSection from "./component/HomePage/HeroSection";
import AboutSection from "./component/HomePage/AboutSection";
import FeaturesSection from './component/HomePage/FeaturesSection';
import PerfectlySection from './component/HomePage/perfectlySection';
import DemoSection from "./component/HomePage/DemoSection";
import DownloadSection from "./component/HomePage/DownloadSection";

function App() {
  return (
    <diV>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection/>
      <DemoSection />
      <DownloadSection />
      <PerfectlySection />
    </diV>

  );
}

export default App;
