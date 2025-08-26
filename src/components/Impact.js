import React from "react";
import "./Impact.css";

const Impact = () => {
  return (
    <section className="impact">
      <div className="impact-container">
        {/* Dark blue rounded card */}
        <div className="impact-card">
          <h2 className="impact-title">Our Impact</h2>
          <p className="impact-sub">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>

          <div className="impact-grid">
            {/* 1 */}
            <div className="impact-item">
              <div className="impact-label">Engineering &amp; Technical DD</div>
              <div className="impact-value">14 WW+</div>
              <div className="impact-caption">Lorem ipsum Lorem &amp; ipsum</div>
            </div>

            {/* 2 */}
            <div className="impact-item">
              <div className="impact-label">Fundraise &amp; Advisory</div>
              <div className="impact-value">USD 1.2Mn+</div>
              <div className="impact-caption">Lorem ipsum Lorem &amp; ipsum</div>
            </div>

            {/* 3 */}
            <div className="impact-item">
              <div className="impact-label">Procurement As A Service (PaaS)</div>
              <div className="impact-value">5 WW+</div>
              <div className="impact-caption">Lorem ipsum Lorem &amp; ipsum</div>
            </div>

            {/* 4 */}
            <div className="impact-item">
              <div className="impact-label">Asset Management &amp; O&amp;M</div>
              <div className="impact-value">5 WW+</div>
              <div className="impact-caption">Lorem ipsum Lorem &amp; ipsum</div>
            </div>
          </div>
        </div>

        {/* Light strip with uppercase italic line + logo placeholders */}
        <div className="impact-strip">
          <p className="impact-quote">
            LOREM IPSUM HAS BEEN THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S.
          </p>

          <ul className="impact-logos">
            <li className="logo-skel" />
            <li className="logo-skel" />
            <li className="logo-skel" />
            <li className="logo-skel" />
            <li className="logo-skel" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Impact;
