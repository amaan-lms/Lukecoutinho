import React from "react";
import {
  Brain,
  Heart,
  Activity,
  ShieldCheck,
  Moon,
  Utensils,
  Users,
  Languages,
  Droplet,
  ArrowRight,
  Leaf,
} from "lucide-react";

const LearningIntro = () => {
  const categories = [
    { name: "Mental Wellness", icon: <Brain size={20} /> },
    { name: "Women's Health", icon: <Heart size={20} /> },
    { name: "Men's Health", icon: <Activity size={20} /> },
    { name: "Digestion", icon: <Utensils size={20} /> },
    { name: "Immunity", icon: <ShieldCheck size={20} /> },
    { name: "Diabetes", icon: <Droplet size={20} /> },
    { name: "Cancer", icon: <Leaf size={20} /> }, // Using Leaf/Ribbon metaphor
    { name: "Sleep", icon: <Moon size={20} /> },
    { name: "Nutrition", icon: <Utensils size={20} /> },
    { name: "Gut Health", icon: <Activity size={20} /> },
    { name: "Family Health", icon: <Users size={20} /> },
    { name: "Hindi Courses", icon: <Languages size={20} /> },
  ];

  return (
    <section className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-14 lg:p-16 text-center border-t-8 border-teal-400 relative overflow-hidden mb-20">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-orange-300"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8">
            Learn with <span className="text-teal-500">Purpose.</span> Live with{" "}
            <span className="text-orange-500">Clarity.</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Whether you wish to take the first step to your health goals or
              are already living with symptoms and a diagnosis, these courses
              are your starting point for making sense of it all. We unpack
              complex health conditions into bite-sized information to give you
              simple actions and better questions to carry into your next
              consult, program, or treatment.
            </p>

            <p className="text-slate-500 italic text-base">
              These self-paced, educational courses offer awareness and general
              guidance, not personalized coaching or treatment, and are meant to
              support – never replace – the care you receive from your medical
              team.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-slate-700 font-medium mb-2">
              Looking to join our one-on-one Wellness Program?
            </p>
            <a
              href="/programs"
              className="text-orange-500 font-bold hover:text-orange-600 uppercase tracking-widest text-sm inline-flex items-center gap-2 transition-all hover:gap-3"
            >
              Click Here to Know More <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">
            Explore Our <span className="text-teal-500">Courses</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold hover:border-teal-500 hover:text-teal-600 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-slate-400 group-hover:text-teal-500 transition-colors">
                  {cat.icon}
                </span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningIntro;
