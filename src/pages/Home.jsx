import React from 'react';
import Hero from '../components/Hero';
import LearnSection from '../components/LearnSection';
import WhyChoose from '../components/WhyChoose';
import MentorSection from '../components/MentorSection';
import Testimonials from '../components/Testimonials';
import CourseRoadmap from '../components/CourseRoadmap';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FianlCTA';
import StickyCTA from '../components/StickyCTA';

const Home = () => {
    return (
        <div>
          <Hero/>
          <LearnSection/>
          <WhyChoose/>
          <MentorSection/>
          <Testimonials/>
          <CourseRoadmap/>
          <FAQ/>
          <FinalCTA/>
          <StickyCTA/>
        </div>
    );
}

export default Home;
