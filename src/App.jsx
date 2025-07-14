import React from "react";
import Hero from "./partials/hero..jsx"; // Import komponen Hero
import ProductInfo from "./partials/productinfo.jsx";
import About from "./partials/about.jsx"; // Import komponen About
import WhyCleanoz from "./partials/whycleanoz.jsx";
import Opening from "./partials/opening.jsx";
import Problem from "./partials/problem.jsx";
import Solution from "./partials/solution.jsx";
import Benefits from "./partials/benefits.jsx";
import WhatYouGet from "./partials/whatyouget.jsx";
import FooterCTA from "./partials/footercta.jsx";
import Navbar from "./partials/navbar.jsx";
import Testimoni from "./partials/testimoni.jsx";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true, // animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductInfo />
      <About />
      <WhyCleanoz />
      <Opening />
      <Problem />
      <Solution />
      <Benefits />
      <WhatYouGet />
      <Testimoni />
      <FooterCTA />
    </div>
  );
};

export default App;
