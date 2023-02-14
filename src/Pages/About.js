import React from 'react';
import Navbar from '../component/navbar';
import HeroSection from '../component/HomePage/HeroSection';
import WhoAreWe from '../component/AboutPage/WhoAreWe';
import HighlightsSection from '../component/AboutPage/HighlightsSection';
import CheckoutSection from '../component/AboutPage/CheckoutSection';
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
        <CheckoutSection />
        <DemoSection />
        <DownloadSection />
        <Footer />
    </>
  )
}

export default About