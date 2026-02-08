import React, { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowUpRight, Instagram, BookOpen, Palette, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const WORK_ITEMS = [
  { id: 1, title: "Beige", category: "Commercial", year: "2024", image: "https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=1200", description: "Minimalist fashion study." },
  { id: 2, title: "Darkness", category: "Commercial", year: "2024", image: "https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=1200", description: "Exploration of silhouette." },
  { id: 3, title: "Gentlemen", category: "Editorial", year: "2024", image: "https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?q=80&w=1200", description: "Modern architectural menswear." },
  { id: 4, title: "City", category: "Commercial", year: "2024", image: "https://images.unsplash.com/photo-1637536701374-073adb2ee745?q=80&w=1200", description: "High-contrast urban imagery." },
  { id: 5, title: "Nature", category: "Editorial", year: "2024", image: "https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=1200", description: "Atmospheric landscape series." },
  { id: 6, title: "Brand", category: "Editorial", year: "2023", image: "https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=1200", description: "Luxury brand visual identity." },
  { id: 7, title: "Studio", category: "Commercial", year: "2023", image: "https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?q=80&w=1200", description: "Precise lighting environments." },
  { id: 10, title: "Elegance", category: "Editorial", year: "2023", image: "https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=1200", description: "Classic editorial silhouettes." },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const Work: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState(WORK_ITEMS[0]);
  const [selectedProject, setSelectedProject] = useState<typeof WORK_ITEMS[0] | null>(null);

  return (
    <div className="pt-24 px-4 lg:h-screen lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[calc(100vh-120px)]">
        {/* Left: Preview Image (Fixed on desktop) */}
        <div 
          className="lg:col-span-6 h-full rounded-3xl overflow-hidden bg-[#050505] relative cursor-pointer group"
          onClick={() => setSelectedProject(hoveredProject)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredProject.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full relative"
            >
              <ImageWithFallback
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-12 left-12">
                 <motion.span 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-2"
                 >
                   Click to Expand
                 </motion.span>
                 <motion.h3 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="text-white text-5xl font-light"
                 >
                   {hoveredProject.title}
                 </motion.h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Work List (Scrolling) */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-6 lg:overflow-y-auto lg:pr-2 flex flex-col gap-4 pb-12 custom-scrollbar"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-[#111] rounded-3xl p-8 lg:p-12 flex flex-col gap-12 border border-white/5"
          >
            <div className="flex flex-col gap-4">
               <h2 className="text-white text-6xl font-light tracking-tighter">Selected Works</h2>
               <p className="text-white/40 text-sm max-w-sm leading-relaxed">
                 A curated selection of editorial commissions. Click any project to view full case study.
               </p>
            </div>

            <div className="flex flex-col">
              {WORK_ITEMS.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredProject(item)}
                  onClick={() => setSelectedProject(item)}
                  className="flex items-center justify-between py-10 border-b border-white/5 group cursor-pointer transition-all hover:px-8 -mx-4 rounded-3xl hover:bg-white/5"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest group-hover:text-[#c5e6a6] transition-colors">{item.category}</span>
                    <span className="text-white text-3xl font-light group-hover:translate-x-2 transition-transform duration-700">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <span className="text-white/20 text-xs font-mono tabular-nums">{item.year}</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
               <SocialLink icon={<Instagram className="w-4 h-4" />} label="Instagram" />
               <SocialLink icon={<BookOpen className="w-4 h-4" />} label="Rednote" />
               <SocialLink icon={<Palette className="w-4 h-4" />} label="Behance" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for Project Detail */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] w-full max-w-6xl h-full lg:h-auto overflow-hidden flex flex-col lg:grid lg:grid-cols-2 shadow-2xl"
            >
              <div className="h-64 lg:h-[70vh] relative">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-between relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div>
                  <span className="text-[#c5e6a6] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{selectedProject.category}</span>
                  <h2 className="text-white text-6xl font-light mb-8 tracking-tighter">{selectedProject.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-6">
                  <div className="flex items-center justify-between border-t border-white/5 pt-8">
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Year</span>
                    <span className="text-white/80 font-mono">{selectedProject.year}</span>
                  </div>
                  <button className="mt-8 w-full bg-white text-black rounded-2xl p-5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5e6a6] transition-colors">
                    Request Full Access
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialLink = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <motion.button 
    whileHover={{ y: -2 }}
    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 transition-all group hover:bg-white/10"
  >
    <div className="flex items-center gap-3">
      <span className="text-white/30 group-hover:text-white transition-colors">{icon}</span>
      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-white transition-colors" />
  </motion.button>
);
