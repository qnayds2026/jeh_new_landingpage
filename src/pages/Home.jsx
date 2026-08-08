import React, { useState } from "react";

import Hero from "../components/Hero";
import LearnSection from "../components/LearnSection";
import MentorSection from "../components/MentorSection";
import Testimonials from "../components/Testimonials";
import CourseRoadmap from "../components/CourseRoadmap";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FianlCTA";
import StickyCTA from "../components/StickyCTA";
import CheckoutModal from "../components/CheckoutModal";
import TrustSection from "../components/TrustSection";
import WhatYouWillMaster from "../components/WhatYouWillMaster";

import logo from "../assets/QNAYDS_LOGO.png";

const Home = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const openCheckout = () => {
    setCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
  };

  const handleContinue = () => {
    console.log(formData);

    // Razorpay Logic
  };

  return (
    <div className="min-h-screen bg-[#050705] text-white">
      {/* =====================================================
          BRAND HEADER
      ===================================================== */}
      <header className="relative z-50 border-b border-white/[0.06] bg-[#050705]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 sm:px-6 lg:px-8">
          <img
            src={logo}
            alt="QNAYDS Academy"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <Hero onEnrollClick={openCheckout} />

      {/* =====================================================
          WHAT YOU'LL LEARN
      ===================================================== */}
      <LearnSection onEnrollClick={openCheckout} />

      {/* =====================================================
          WHAT YOU WILL MASTER
      ===================================================== */}
      <WhatYouWillMaster onEnrollClick={openCheckout} />

      {/* =====================================================
          TRUST / GOOGLE REVIEWS
      ===================================================== */}
      <TrustSection onEnrollClick={openCheckout} />

      {/* =====================================================
          STUDENT SUCCESS STORIES
      ===================================================== */}
      <Testimonials onEnrollClick={openCheckout} />

      {/* =====================================================
          MENTOR
      ===================================================== */}
      <MentorSection onEnrollClick={openCheckout} />

      {/* =====================================================
          COURSE ROADMAP
      ===================================================== */}
      <CourseRoadmap onEnrollClick={openCheckout} />

      {/* =====================================================
          FAQ
      ===================================================== */}
      <FAQ />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <FinalCTA onEnrollClick={openCheckout} />

      {/* =====================================================
      
      STICKY CTA
      ===================================================== */}
      <StickyCTA onEnrollClick={openCheckout} />

      {/* =====================================================
          CHECKOUT MODAL
      ===================================================== */}
      <CheckoutModal
        open={checkoutOpen}
        onClose={closeCheckout}
        formData={formData}
        setFormData={setFormData}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default Home;
