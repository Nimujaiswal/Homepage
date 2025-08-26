import React from "react";
import "./hero.css";
import heroBg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            What is Lorem Ipsum?<br />
            What is Lorem IpsumWhat is?<br />
            What is Lorem Ipsum?
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div className="hero-form">
            <input type="email" placeholder="Enter your email" />
            <button className="hero-btn">GET IN TOUCH</button>
          </div>

          <span className="trusted">
            Trusted By 100+ Energy Professionals Worldwide
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
