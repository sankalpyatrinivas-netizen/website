import React from "react";
import { FaWifi, FaLock, FaTint, FaSnowflake, FaShower } from "react-icons/fa";
import "./amenities.css";

const Amenities = () => {
  const amenitiesList = [
    { icon: <FaWifi />, title: "Free Wi-Fi" },
    { icon: <FaLock />, title: "Locker Facility" },
    { icon: <FaTint />, title: "RO Water" },
    { icon: <FaSnowflake />, title: "Air Conditioner" },
    { icon: <FaShower />, title: "Geyser" },
  ];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Amenities</span>
            <h2 className="mb-4">Comfort & Convenience</h2>
          </div>
        </div>

        {/* ✅ All amenities in one row */}
        <div className="row d-flex justify-content-center">
          {amenitiesList.map((item, index) => (
            <div
              className="col-md px-md-1 d-flex align-self-stretch ftco-animate"
              key={index}
            >
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    {item.icon}
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
