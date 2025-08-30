// import { useState } from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import BeforeAfterSection from "./components/BeforeAfter";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BeforeAfterSection />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
