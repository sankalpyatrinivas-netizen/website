import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    child: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Check Availability:\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nRoom: ${formData.room}\nGuests: ${formData.guests}`
    );
  };

  return (
    <section className="booking-section">
      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Check-in Date</label>
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label>Check-out Date</label>
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div> 
            <div className="form-group">
              <label>Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Select Guests</option>
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults">4 Adults</option>
                <option value="5 Adults">5 Adults</option>
                <option value="6 Adults">6 Adults</option>
              </select>
            </div>
             <div className="form-group">
              <label>Guests</label>
              <select
                name="child"
                value={formData.guests}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Select Guests</option>
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults">4 Adults</option>
                <option value="5 Adults">5 Adults</option>
                <option value="6 Adults">6 Adults</option>
              </select>
            </div>

            <div className="form-group btn-wrapper">
              <button type="submit" className="btn btn-primary">
                Check Availability
                <small className="d-block">Best Price Guaranteed!</small>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookNow;
