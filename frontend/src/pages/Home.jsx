import React, { useEffect } from "react";
import AOS from "aos";
import Header from "../components/header/Header";
import TopBanner from "../components/top_banner/TopBanner";
import BookNow from "../components/book_now/BookNow";
import Amenities from "../components/amenities/amenities";
import AboutUs from "../components/about_us/AboutUs";
import Testimonial from "../components/testimonial/Testimonial";
import BunkBedPrice from "../components/bunk_bed_price/BunkBedPrice";
import ContactUs from "../components/contact_us/ContactUs";
import Footer from "../components/footer/Footer";

const Home = () => {
   useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <Header />
      <TopBanner />
      <BookNow />
      <Amenities />
      <AboutUs/>
      < Testimonial/>
      <BunkBedPrice/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default Home;
