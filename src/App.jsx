import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Biodigester from "./pages/Biodigester";
import What from "./pages/What";
import AboutUs from "./pages/AboutUs";
import SectorResource from "./components/SectorResource/SectorResource.jsx";
import Sector from "./pages/Sector.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Tender from "./pages/Tender.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biodigester" element={<Biodigester />} />
      <Route path="/what-we-do" element={<What />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/sector-resources" element={<Sector />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/tenders" element={<Tender />} />
    </Routes>
  );
};

export default App;
