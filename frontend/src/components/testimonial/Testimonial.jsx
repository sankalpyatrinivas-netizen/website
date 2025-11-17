import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const Testimonial = () => {
  const reviewImages = [
    { src: "/assets/images/testimonial/1.png", alt: "Google Review 1" },
    { src: "/assets/images/testimonial/2.png", alt: "Google Review 2" },
    { src: "/assets/images/testimonial/3.png", alt: "Google Review 3" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <section className="testimony-section text-center py-5">
      <div className="container">
        <div className="heading-section mb-4">
          <span className="section-title">Guest Reviews</span>
          <h2 className="mb-3 section-subtitle">What Guests Say About Sankalp Yatri Nivas</h2>
        </div>

        <Slider {...settings}>
          {reviewImages.map((item, index) => (
            <div key={index} className="google-review-card">
              <img
                src={item.src}
                alt={item.alt}
                className="img-fluid review-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
