import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";

const FeaturedCourses = () => {
  const allCourses = [
    {
      id: 1,
      title: "Healthy Pregnancy Journey",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Parenting Begins Before Birth: Pregnancy Foundations for a Happy, Healthy Child...",
      students: 1,
      lessons: 6,
      price: "₹699.00",

      image:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Menopause Empowerment Guide",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Redefining Menopause: Your Guide to Rebuilding Strength & Hormonal Harmony...",
      students: 72,
      lessons: 30,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Rewire Your Mind",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Break the Loop: How to Interrupt, Reframe, and Reprogram Negative Thoughts...",
      students: 20,
      lessons: 31,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "21-Day Gut Reset",
      level: "Advanced Level",
      author: "Team Luke",
      description:
        "Introducing Our 21-Day Gut Reset! Every aspect of your health circles back to your gut...",
      students: 70,
      lessons: 25,
      price: "₹6,999.00",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "The Lymphatic Reset",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Description: Welcome to The Lymphatic Reset Blueprint: A Step-by-Step Guide to Cleanse Your Body...",
      students: 125,
      lessons: 20,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Metabolic Health 101",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Metabolic Health 101: The Ultimate Guide to Energy, Fat Loss, and Longevity...",
      students: 82,
      lessons: 12,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Decoding the Science Behind Stubborn Fat and How to Burn It",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome! This course is on Decoding the Science Behind Stubborn Fat and How to Burn It...",
      students: 313,
      lessons: 19,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      title:
        "Inflammation: The Root Cause of All Chronic Diseases and How to Fight Back",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Do you ever feel like your health is out of your control, grappling with chronic conditions...",
      students: 247,
      lessons: 32,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allCourses.length / itemsPerPage);

  const currentCourses = allCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900">
            Featured <span className="text-orange-600">Courses</span>
          </h2>
        </div>

        <motion.div
          key={currentPage}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {currentCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-0 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-l-md uppercase tracking-widest">
                  Featured
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center">
                  <span
                    className={`px-5 py-2 rounded-full text-[10px] font-black text-white uppercase shadow-lg border-2 border-white ${
                      course.level.includes("Advanced")
                        ? "bg-teal-600"
                        : "bg-orange-500"
                    }`}
                  >
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-10 flex-grow flex flex-col">
                <h3 className="text-[1.1rem] font-black text-slate-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <Users size={14} />
                  </div>
                  <span className="text-xs text-slate-500 font-bold">
                    {course.author}
                  </span>
                </div>

                <p className="text-slate-500 text-[1rem] leading-relaxed mb-6 line-clamp-3 italic">
                  {course.description}
                </p>

                <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-teal-500" />
                      <span className="text-xs font-bold text-slate-700">
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-orange-500" />
                      <span className="text-xs font-bold text-slate-700">
                        {course.lessons}
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-900 font-black text-base tracking-tight">
                    {course.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center items-center gap-3 mt-16">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${
              currentPage === 1
                ? "text-slate-200 cursor-not-allowed"
                : "text-slate-400 hover:bg-slate-100 hover:text-teal-500"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-xl text-sm font-black transition-all duration-300 ${
                currentPage === i + 1
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30 scale-110"
                  : "bg-white border border-slate-200 text-slate-400 hover:border-teal-500 hover:text-teal-500"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${
              currentPage === totalPages
                ? "text-slate-200 cursor-not-allowed"
                : "text-slate-400 hover:bg-slate-100 hover:text-teal-500"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
