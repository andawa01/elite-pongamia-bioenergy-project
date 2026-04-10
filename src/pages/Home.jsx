import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Impact from "../components/Impact/Impact.jsx";
import SectorNews from "../components/SectorNews/SectorNews.jsx";
import SectorResource from "../components/SectorResource/SectorResource.jsx";
import Section from "../components/Section/Section.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Impact />
      <SectorNews />
      <SectorResource />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
