import React from "react";
import "./CaseStudies.css";
import caseImage from "../assets/Case.png";

function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-container">
        {/* Left Side - Case Studies List */}
        <div className="case-list">
          <h2 className="case-heading">Case studies</h2>

          <div className="case-card">
            <div className="case-info">
              <h3>Case Study 1: TruBuyer – Lorem Ipsum</h3>
              <p>Lorem Ipsum Lorem Ipsum</p>
            </div>
            <div className="case-meta">
              <span className="case-date">08 April, 2025</span>
              <button className="read-more">READ MORE</button>
            </div>
          </div>

          <div className="case-card">
            <div className="case-info">
              <h3>Case Study 2: T Lorem Ipsum</h3>
              <p>Lorem Ipsum Lorem Ipsum</p>
            </div>
            <div className="case-meta">
              <span className="case-date">08 April, 2025</span>
              <button className="read-more">READ MORE</button>
            </div>
          </div>

          <div className="case-card">
            <div className="case-info">
              <h3>Case Study 3: Lorem Ipsum</h3>
              <p>Lorem Ipsum Lorem Ipsum</p>
            </div>
            <div className="case-meta">
              <span className="case-date">08 April, 2025</span>
              <button className="read-more">READ MORE</button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="case-image">
          <img src={caseImage} alt="Case Study" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="transformation">
        <h2>Ready for Transformation?</h2>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="transform-buttons">
          <button className="demo-btn">BOOK A DEMO</button>
          <button className="update-btn">SIGN UP FOR UPDATES</button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
