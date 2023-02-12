import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HomePage/HeroSection';
import AboutSection from './component/HomePage/AboutSection';
import FeaturesSection from './component/HomePage/FeaturesSection';
import YoutubeSection from './component/HomePage/youtubeSection';
import PerfectlySection from './component/HomePage/perfectlySection';
function App() {

  return (

      <diV>
        <Navbar />
        <HeroSection/>
        <AboutSection/>
        <FeaturesSection/>
        {/* <YoutubeSection/> */}
        <PerfectlySection />
      </diV>

  );
}

export default App;