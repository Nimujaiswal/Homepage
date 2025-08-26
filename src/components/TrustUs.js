import React from "react";
import "./TrustUs.css";
import icon1 from "../assets/1.png";
import icon2 from "../assets/2.png";
import icon3 from "../assets/3.png";
import icon4 from "../assets/4.png";
import truckImage from "../assets/Truck.png";

const TrustUs = () => {
  return (
    <section className="trustus">

      <div className="trustus-header">
        <h2>Why Global Companies Trust Us?</h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took
        </p>
      </div>


      <div className="trustus-features">
        <div className="feature-card">
          <img src={icon1} alt="icon1" />
          <h3>Electronic, Remag Essentially</h3>
              <ul>
            <li>Lorem Ipsum has been the industry’s standard</li>
            <li>Lorem Ipsum has been the industry’s standard</li>
             </ul>
        </div>

        <div className="feature-card">
          <img src={icon2} alt="icon2" />
          <h3>Data-Second Electronic, Remag</h3>
              <ul>
            <li>Lorem Ipsum has been the industry’s standard</li>
            <li>Lorem Ipsum has been the industry’s standard</li>
             </ul>
        </div>

        <div className="feature-card">
          <img src={icon3} alt="icon3" />
          <h3>Data-Second & Deployment</h3>
             <ul>
            <li>Lorem Ipsum has been the industry’s standard</li>
            <li>Lorem Ipsum has been the industry’s standard</li>
             </ul>
        </div>

        <div className="feature-card">
          <img src={icon4} alt="icon4" />
          <h3>Continuous Innovation & End-To-Front Support</h3>
          <ul>
            <li>Lorem Ipsum has been the industry’s standard</li>
            <li>Lorem Ipsum has been the industry’s standard</li>
             </ul>
        </div>
      </div>


     <div className="trustus-truck">
  <img src={truckImage} alt="truck-bg" className="truck-bg" />


  <div className="truck-overlay">
    <div className="overlay-box">
      <button className="green-btn">Lorem Ipsum</button>
      <p>Transparently Renewable Simplified Management</p>
    </div>
  </div>

 
  <button className="arrow right-arrow">❯</button>
</div>


          </section>
  );
};

export default TrustUs;
