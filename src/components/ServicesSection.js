import React from "react";
import "./ServicesSection.css";
import building from "../assets/building.png";

function ServicesSection() {
  return (
    <section className="services">
      {/* Moved the heading to the top, outside of the main flex container */}
      <h2 className="services-heading">
        LOREM IPSUM HAS BEEN THE INDUSTRY'S
      </h2>
      <p className="services-subtext">
            End-to-end services for energy assets including feasibility studies,
            engineering support, commissioning, and audits
          </p>

      <div className="services-container">
        {/* Left Side - Image */}
        <div className="services-image">
          <img src={building} alt="Building" />
        </div>

        {/* Right Side - Content */}
        <div className="services-content">
          <p className="services-hoptext">
            What We Offer
          </p>

          {/* Services List */}
          <div className="services-list">
            <div className="service-item active">
              <span>Design Design and LIE</span>
              <span className="arrowway">➜</span>
            </div>
            <div className="service-item">
              <span>ABC & ABC Services</span>
              <span className="arrowway">➜</span>
            </div>
            <div className="service-item">
              <span>Abced Technical, FguiIkh & Cdefg Management</span>
              <span className="arrowway">➜</span>
            </div>
            <div className="service-item">
              <span>Capital Abcedfg & Advisory</span>
              <span className="arrowway">➜</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="who-for">
        <h3>Who It's For</h3>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum Lorem Ipsum.
        </p>
        <button className="explore-btn">Explore Our Services</button>
      </div>
    </section>
  );
}

export default ServicesSection;