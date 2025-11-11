import React from "react";
import "./BunkBedPrice.css";


const BunkBedPrice = () => {
  return (
    <section className="bunkbed-section">
      <div className="container">
        <div className="row no-gutters justify-content-center align-items-center">
          {/* Left side image */}
          <div className="col-md-5 d-flex">
            <div
              className="bunkbed-img aside-stretch"
              style={{ backgroundImage: `url('/assets/images/top_banner/top_banner_1.jpeg')` }}
            ></div>
          </div>

          {/* Right side text */}
          <div className="col-md-7 py-5 pl-md-5">
            <div className="py-md-5">
              <div className="heading-section mb-4">
                <span className="subheading">Affordable Stay</span>
                <h2 className="mb-0">AC Dormitory – ₹350 per Bed</h2>
              </div>

              <div className="bunkbed-desc">
                <p>
                  Experience clean, comfortable, and air-conditioned bunk beds
                  designed for solo travellers, students, and groups.  
                  Each bed has a personal locker, reading light, and charging point.
                </p>
                <p>
                  Located at the heart of Gwalior, Sankalp Yatri Nivas offers
                  safety, convenience, and affordability — all in one place.
                </p>

                <div className="price-box mt-4">
                  <h3>₹350 <span>/ per bed</span></h3>
                  <a href="#booking" className="btn btn-primary">
                    Book Your Bed
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BunkBedPrice;
