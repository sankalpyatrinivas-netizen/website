import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopBanner.css";

const TopBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  const slides = [
    {
      image: "/assets/images/top_banner/top_banner_1.jpeg",
      title: "Welcome to Sankalp Yatri Nivas",
      text: "Affordable comfort in the heart of Gwalior",
    },
    {
      image: "/assets/images/top_banner/top_banner_2.jpeg",
      title: "Modern AC Dormitory",
      text: "Stay cozy. Stay smart. Stay with Sankalp.",
    },
    {
      image: "/assets/images/top_banner/top_banner_1.jpeg",
      title: "Ideal for Travellers",
      text: "Clean, Safe, and Budget-friendly stays for all.",
    },
  ];

  return (
    <div className="top-banner">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="banner-slide">
            <img src={slide.image} alt={slide.title} className="banner-img" />
            <div className="banner-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBanner;
