import React from 'react';
import Navbar from "../component/navbar";
import HeroSection from '../component/HomePage/HeroSection';
import DownloadSection from '../component/HomePage/DownloadSection';
import ContactUsSection from '../component/ContactUs/ContactUsSection';
import Footer from '../component/footer';

function ContactUs() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <ContactUsSection />
        <DownloadSection />
        <Footer />
    </>
  )
}

export default ContactUs