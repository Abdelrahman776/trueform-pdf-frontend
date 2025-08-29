// import { useState } from 'react'

import { Features } from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Features/>
      <Pricing/>
      <Footer />
    </>
  );
}

export default App;
