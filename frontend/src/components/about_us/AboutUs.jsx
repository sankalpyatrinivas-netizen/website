import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="ftco-section ftco-wrap-about ftco-no-pt ftco-no-pb">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-7 order-md-last d-flex">
            <div
              className="img img-1 mr-md-2 ftco-animate"
              style={{ backgroundImage: "url('/assets/images/top_banner/top_banner_2.jpeg')" }}
            ></div>
            <div
              className="img img-2 ml-md-2 ftco-animate"
              style={{ backgroundImage: "url('/assets/images/top_banner/top_banner_1.jpeg')" }}
            ></div>
          </div>
          <div className="col-md-5 wrap-about pb-md-3 ftco-animate pr-md-5 pb-md-5 pt-md-4">
            <div className="heading-section mb-4 my-5 my-md-0">
              <span className="subheading">About Sankalp Yatri Nivas</span>
              <h2 className="mb-4">
                A Comfortable, Safe, and Budget-Friendly Stay in Gwalior
              </h2>
            </div>
            <p>
              Sankalp Yatri Nivas is a thoughtfully designed dormitory and guest
              stay in the heart of Gwalior — built for travelers, students, and
              professionals who seek comfort without compromising on budget.  
              Every detail here reflects warmth, cleanliness, and a sense of
              belonging.
            </p>
            <p>
              This initiative is managed by <strong>Mr. Pradeep Gupta</strong>,
              who is actively involved in social work and community development.
              His vision behind Sankalp Yatri Nivas is to create a welcoming
              space where people from all walks of life can stay safely and
              peacefully — whether for a short trip or a longer journey.
            </p>
            <p>
              <a href="#booking" className="btn btn-secondary rounded">
                Book Your Stay Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
