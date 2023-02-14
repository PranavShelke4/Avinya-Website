import React from 'react';
import Navbar from '../component/navbar';
import HeroSection from '../component/HomePage/HeroSection';
import WhoAreWe from '../component/AboutPage/WhoAreWe';
import HighlightsSection from '../component/AboutPage/HighlightsSection';
import DemoSection from "../component/HomePage/DemoSection";
import DownloadSection from "../component/HomePage/DownloadSection";
import Footer from '../component/footer';

function About() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <WhoAreWe />
        <HighlightsSection />
        <DemoSection />
        <DownloadSection />
        <Footer />
    </>
  )
}

export default About