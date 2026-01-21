import React from 'react';
import { ArrowRight } from 'lucide-react';

const LearningHubCTA = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Accent Tag */}
        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block">
          Educational Excellence
        </span>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
          Luke’s <span className="text-orange-500 font-light ">Learning Hub</span>
        </h2>

        {/* Paragraph */}
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
          Invest in your well-being with self-paced educational courses designed 
          to help you make informed choices — <span className="text-slate-200">anytime, anywhere.</span>
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-4 px-12 py-6 bg-orange-500 text-white font-black rounded-2xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-orange-500/20 active:scale-95 group">
            <span className="uppercase tracking-widest">Explore Courses</span>
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        
       
      </div>
    </section>
  );
};

export default LearningHubCTA;