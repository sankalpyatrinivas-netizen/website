import React, { useState } from "react";
import "./BookNow.css";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const today = new Date().toISOString().split("T")[0];

const BookNow = () => {
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    beds: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { checkin, checkout, beds } = formData;

    if (new Date(checkin) >= new Date(checkout)) {
      alert("Check-out date must be after check-in date!");
      return;
    }

    const nights =
      (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24);

    const phoneNumber = "918982596209";
    const message = `
*Hello Sankalp Yatri Nivas!* 

I would like to book my stay. Please find my details below:

*Check-in:* ${checkin}
*Check-out:* ${checkout}
*Duration:* ${nights} ${nights === 1 ? "night" : "nights"}

*Number of Beds:* ${beds}

 *Note:* Each bed is for *one person only*.  
*Children above 10 years* cannot share a bed — they will need a separate bed.

Please confirm bed availability.
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };




  return (
    <section className="booking-section">
      <div className="booking-container">
        <h2 className="section-title">Book Your Stay</h2>
        <p className="section-subtitle">
          Comfort, Safety & Warm Hospitality at the Heart of Gwalior
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group date-input">
            <label><FaCalendarAlt /> Check-in</label>
            <input
              type="date"
              name="checkin"
              value={formData.checkin}
              onChange={handleChange}
              required
              className="date-input"
              min={today}
            />
          </div>

          <div className="form-group">
            <label><FaCalendarAlt /> Check-out</label>
            <input
              type="date"
              name="checkout"
              value={formData.checkout}
              onChange={handleChange}
              required
              className="date-input"
              min={today}
            />
          </div>

          <div className="form-group">
            <label><FaUser /> Number of Beds</label>
            <select
              name="beds"
              value={formData.beds}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              {[...Array(16).keys()].map((n) => (
                <option key={n + 1} value={`${n + 1}`}>
                  {n + 1}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="form-group">
            <label><FaUser /> Child</label>
            <select
              name="child"
              value={formData.child}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              {[...Array(6).keys()].map((n) => (
                <option key={n} value={`${n}`}>
                  {n}
                </option>
              ))}
            </select>
          </div> */}

          <button type="submit" className="btn-book">
            Check Availability
          </button>
        </form>
         {/* Highlighted Note Section */}
        <div className="booking-note">
          <p>Each bed is for one person only.</p>
          <p>Children above <strong>10 years</strong> cannot share a bed and must have their own booking.</p>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
