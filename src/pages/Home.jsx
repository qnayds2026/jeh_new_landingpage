import React, { useState } from "react";

import Hero from "../components/Hero";
import LearnSection from "../components/LearnSection";
import WhyChoose from "../components/WhyChoose";
import MentorSection from "../components/MentorSection";
import Testimonials from "../components/Testimonials";
import CourseRoadmap from "../components/CourseRoadmap";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FianlCTA";
import StickyCTA from "../components/StickyCTA";
import CheckoutModal from "../components/CheckoutModal";

const Home = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const openCheckout = () => setCheckoutOpen(true);

  const closeCheckout = () => setCheckoutOpen(false);

  const handleContinue = () => {
    console.log(formData);

    // Razorpay Logic
  };

  return (
    <>
      <Hero onEnrollClick={openCheckout} />

      <LearnSection onEnrollClick={openCheckout} />

      <WhyChoose onEnrollClick={openCheckout} />

      <MentorSection onEnrollClick={openCheckout} />

      <Testimonials onEnrollClick={openCheckout} />

      <CourseRoadmap onEnrollClick={openCheckout} />

      <FAQ />

      <FinalCTA onEnrollClick={openCheckout} />

      <StickyCTA onEnrollClick={openCheckout} />

      <CheckoutModal
        open={checkoutOpen}
        onClose={closeCheckout}
        formData={formData}
        setFormData={setFormData}
        onContinue={handleContinue}
      />
    </>
  );
};

export default Home;
