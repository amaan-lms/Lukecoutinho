import React from "react";
import Hero from "./Hero";
import LearningIntro from "./LearningIntro";
import FeaturedCourses from "./FeaturedCourses";
import LearningExperience from "./LearningExperience";
import FAQ from "./FAQ";

function Home() {
  return (
    <>
      <Hero />
      <LearningIntro/>
      <FeaturedCourses/>
      <LearningExperience/>
      <FAQ/>
    </>
  );
}

export default Home;
