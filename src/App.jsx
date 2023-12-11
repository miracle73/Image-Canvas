import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Form from "./components/Form";
import DPCard from "./components/Form/DPCard/index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dp-card/:userId" element={<DPCard />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
