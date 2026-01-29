import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users } from 'lucide-react';
import img from '../../../assets/9th.jpg';

export default function Course9() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900">
      <section className="relative h-[80vh] overflow-hidden bg-gray-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={img}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-4">
            <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">Featured</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-4xl leading-[0.9]">Life Lessons <span className="text-orange-500 italic font-light">For Adults</span></h1>
          </motion.div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"><Users size={24} className="text-orange-500 mb-3" /><p className="text-sm text-gray-500 mb-1">Students</p><p className="text-2xl font-black text-gray-900">5</p></div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"><Clock size={24} className="text-orange-500 mb-3" /><p className="text-sm text-gray-500 mb-1">Lessons</p><p className="text-2xl font-black text-gray-900">28</p></div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"><CheckCircle2 size={24} className="text-orange-500 mb-3" /><p className="text-sm text-gray-500 mb-1">Price</p><p className="text-2xl font-black text-gray-900">₹699</p></div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"><h2 className="text-3xl font-black text-gray-900 mb-4">About This Course</h2><p className="text-gray-600 text-lg leading-relaxed">A comprehensive roadmap to personal and emotional well-being through real-world insights and practical wisdom.</p></div>
      </div>
    </div>
  );
}
