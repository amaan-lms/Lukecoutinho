import React from 'react';
import { BookOpen, ArrowRight, Bookmark, LayoutGrid, Library, Plus } from 'lucide-react';

const BooksCollection = () => {
  // 4 Vertical Books (Long Rectangles)
  const verticalBooks = [
    { id: 1, title: "Insights, and Inspiration", para: "Dive into a wellness journey on our blog, where insights meet inspiration, guiding you to a healthier you.", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400" },
    { id: 2, title: "Recipe of the Season", para: "Discover culinary delights in our recipe section, harmonizing flavors, nutrition, and simplicity for a healthier you.", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400" },
    { id: 3, title: "Luke's Learning Hub", para: "Step into a world of education and self-discovery with our short courses in Lifestyle Medicine and Holistic Nutrition.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400" },
    { id: 4, title: "Masterclasses for You", para: "Get access to 13+ years of top learnings in bite-sized actionable steps with these power-packed online masterclasses by Luke.", img: "https://images.unsplash.com/photo-1532012197367-6309011b7d4d?q=80&w=400" },
  ];

  // 2 Square Highlight Sections
  const squareHighlights = [
    { title: "Books", para: "Explore transformative reads by Luke Coutinho. Bestsellers like “Back to the Roots” with Tamannaah Bhatia and more here.", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400" },
    { title: "Reimagine Your Lifestyle", para: "Step into a world of wisdom where experts in health, wellness, and lifestyle share life transformation insights.", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400" },
  ];

  const bottomGallery = [
    { title: "Lifestyle Medicine", para: "Reversing chronic conditions through food.", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400" },
    { title: "The Sleep Solution", para: "Mastering your natural circadian rhythm.", img: "https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=400" },
    { title: "Gut Microbiome", para: "The second brain and its impact on mood.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400" },
    { title: "Cellular Healing", para: "The science of deep tissue recovery.", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400" },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header & Stats Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-orange-500 mb-6">
              <BookOpen size={20} />
              <span className="text-sm font-black uppercase tracking-widest text-orange-600">The Library</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Wellness Resources for <span className="text-orange-500 italic font-light">Your Journey</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 border-l-2 border-slate-200 pl-8 h-fit">
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">16+</div>
              <p className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">Categories</p>
              <p className="text-slate-500 text-xs leading-relaxed">Explore endless possibilities with categories at your fingertips.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">8k+</div>
              <p className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">Resources</p>
              <p className="text-slate-500 text-xs leading-relaxed">Discover a rich spectrum of resources curated for you.</p>
            </div>
          </div>
        </div>

        {/* 2. Top Section: 4 Vertical + 2 Squares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          
          {/* Vertical Books */}
          {verticalBooks.map((book) => (
            <div key={book.id} className="group bg-white rounded-[2.5rem] p-4 border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] mb-6">
                <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={18} />
                </button>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-orange-500 transition-colors">{book.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">{book.para}</p>
              </div>
            </div>
          ))}

          {/* 2 Highlight Square Cards (Spanning 2 columns each) */}
          {squareHighlights.map((card, i) => (
            <div key={i} className="lg:col-span-2 relative aspect-square lg:aspect-auto lg:h-[450px] overflow-hidden rounded-[3rem] bg-slate-900 group">
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-4xl font-black text-white mb-3">{card.title}</h3>
                <p className="text-slate-300 text-base max-w-sm mb-6 leading-relaxed">{card.para}</p>
                {/* <button className="flex items-center gap-2 text-orange-500 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
                  Read Full Story <ArrowRight size={16} />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Bottom Section: Top Reads (No Price/Buy) */}
        <div className="relative pt-20 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h3 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <Bookmark className="text-orange-500" fill="currentColor" size={24} />
              Don’t Miss Out: <span className="text-orange-500 italic">Our Top Reads</span>
            </h3>
            <div className="h-[2px] flex-grow bg-slate-200 hidden lg:block mx-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {bottomGallery.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-slate-200 shadow-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.para}</p>
              </div>
            ))}
          </div>

          {/* Final Button */}
          <div className="flex justify-center">
            <button className="group flex items-center gap-4 px-16 py-6 bg-slate-900 text-white font-black rounded-full hover:bg-orange-500 transition-all shadow-2xl shadow-slate-900/10">
              <span className="uppercase tracking-[0.2em]">View All Blogs</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BooksCollection;