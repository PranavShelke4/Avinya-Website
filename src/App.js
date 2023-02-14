import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/Contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
