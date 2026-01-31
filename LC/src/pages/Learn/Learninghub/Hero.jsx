import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import heroBg from "../../../assets/learning-hub/hero/learning-hub-hero.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToCourses = () => {
    const element = document.getElementById("programs-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`relative h-[85vh] w-full overflow-hidden bg-slate-900 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luke Coutinho Learning Hub"
          className="w-full h-full object-cover object-center md:object-top"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-2xl transform transition-all duration-1000 translate-y-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Luke’s Learning Hub
          </h1>

          <p className="text-lg md:text-xl text-slate-100 mb-8 font-medium leading-relaxed opacity-90">
            Your Journey to Better Health Begins with the Right Knowledge
          </p>

          <button
            onClick={handleScrollToCourses}
            className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 flex items-center gap-2"
          >
            Explore Courses
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
