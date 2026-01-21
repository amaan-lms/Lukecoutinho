import React from 'react';
import { Leaf, Dumbbell, Moon, Heart, Sparkles, Wind, ArrowRight } from 'lucide-react';

const PillarsSection = () => {
  const pillars = [
    {
      id: "01",
      title: "Deep Cellular Nutrition",
      content: "Embark on a journey of wellness with Cellular Nutrition, tailoring nourishment to your unique body, metabolism, and health objectives. It emphasizes holistic practices for optimal cellular nourishment and overall vitality.",
      icon: <Leaf size={28} />,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: "02",
      title: "Holistic Adequate Exercise",
      content: "Embrace holistic and exercise that prioritizes your well-being, incorporating cardio, strength, flexibility, endurance, mobility, and balance. It’s about movement that respects your limits and makes you feel happy, robust, and alive.",
      icon: <Dumbbell size={28} />,
      gradient: "from-slate-600 to-slate-800"
    },
    {
      id: "03",
      title: "Quality Sleep Strategies",
      content: "Discover the transformative power of quality sleep. Beyond the duration, it’s about creating a sleep-friendly environment and rhythm balance—key components in unlocking the body’s natural healing potential. Restful sleep helps.",
      icon: <Moon size={28} />,
      gradient: "from-orange-400 to-orange-500"
    },
    {
      id: "04",
      title: "Fostering Emotional Wellness",
      content: "Elevate your well-being by embracing Emotional Wellness-where acceptance, gratitude, meditation, and more converge to foster inner harmony, a prerequisite for healing and recovery. This will enhance your overall mental health.",
      icon: <Heart size={28} />,
      gradient: "from-slate-400 to-slate-500"
    },
    {
      id: "05",
      title: "Reconnecting with the Spirit",
      content: "Reconnect with your inner self through the Spirit, embracing simplicity in kindness, meaningful relationships, and spiritual practices for a profound sense of well-being. This cultivates a harmonious balance.",
      icon: <Sparkles size={28} />,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: "06",
      title: "The Power of Breath",
      content: "Understand the power of your breath to calm the mind, restore balance, and fuel every cell with life-giving oxygen. Through conscious breathing, shift effortlessly from stress to harmony, activating your body’s natural healing and power.",
      icon: <Wind size={28} />,
      gradient: "from-slate-700 to-slate-900"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Dive into the <span className="text-orange-500 italic">06 Pillars</span> of Holistic Health!
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Vertical Journey Layout */}
        <div className="relative">
          {/* Central Line Decor */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-0">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.id} 
                className={`flex flex-col lg:flex-row items-center justify-between w-full group ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Card Side */}
                <div className="w-full lg:w-[45%]">
                  <div className="relative p-10 bg-slate-50 border border-slate-100 rounded-[3rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 group-hover:-translate-y-2">
                    
                    {/* Floating Number Tag */}
                    <div className="absolute -top-6 left-10 px-6 py-2 bg-slate-900 text-white font-black rounded-full text-sm tracking-widest group-hover:bg-orange-500 transition-colors">
                      PHASE {pillar.id}
                    </div>

                    <div className="flex items-center gap-6 mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${pillar.gradient} shadow-lg transition-transform duration-500 `}>
                        {pillar.icon}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 font-medium leading-relaxed mb-8">
                      {pillar.content}
                    </p>

                    {/* <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-orange-500 group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={16} />
                    </button> */}
                  </div>
                </div>

                {/* Center Circle Decor */}
                <div className="hidden lg:flex w-10 h-10 rounded-full bg-white border-4 border-slate-100 z-10 items-center justify-center group-hover:border-orange-500 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-orange-500"></div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="hidden lg:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified Bottom Button */}
        <div className="mt-24 flex justify-center">
          <button className="px-16 py-6 bg-orange-500 text-white font-black rounded-full text-lg shadow-2xl shadow-orange-500/40 hover:bg-slate-900 transition-all active:scale-95 flex items-center gap-4">
            VIEW THE FULL BLUEPRINT
            <ArrowRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PillarsSection;