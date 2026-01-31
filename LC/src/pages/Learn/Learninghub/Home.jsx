import React from "react";
import Hero from "./Hero";
import LearningIntro from "./LearningIntro";
import FeaturedCourses from "./FeaturedCourses";
import LearningExperience from "./LearningExperience";

function Home() {
  return (
    <>
      <Hero />
      <LearningIntro/>
      <FeaturedCourses/>
      <LearningExperience/>
    </>
  );
}

export default Home;
