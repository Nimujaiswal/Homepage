import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Impact from "./components/Impact";
import TrustUs from "./components/TrustUs";
import Service from "./components/ServicesSection";
import Case from "./components/CaseStudies";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Impact />
      <TrustUs />
      <Service />
      <Case />
      <Footer />
    </div>
  );
}

export default App;