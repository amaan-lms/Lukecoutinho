import React from "react";
import Hero from "./Hero";
import LearningIntro from "./LearningIntro";
import FeaturedCourses from "./FeaturedCourses";
import LearningExperience from "./LearningExperience";
import FAQ from "./FAQ";
import HowItWorks from "./HowItWorks";
import GiftBanner from "./GiftBanner";

function Home() {
  return (
    <>
      <Hero />
      <LearningIntro/>
      <FeaturedCourses/>
      <LearningExperience/>
      <FAQ/>
      <HowItWorks/>
      <GiftBanner/>
    </>
  );
}

export default Home;
