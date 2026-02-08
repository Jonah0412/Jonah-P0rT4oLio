import React, { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Instagram, BookOpen, Palette, ChevronLeft, ChevronRight, ArrowUpRight, Mail, Camera, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PROJECTS = [
  { id: 1, title: "Beige", category: "Commercial", image: "https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=1200", description: "A minimalist exploration of neutral tones and organic textures in high-fashion editorial." },
  { id: 2, title: "Darkness", category: "Illustration", image: "https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=1200", description: "Challenging the boundaries of light and shadow through cinematic portraiture." },
  { id: 3, title: "Gentlemen", category: "Editorial", image: "https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?q=80&w=1200", description: "Sophisticated styling meets raw architectural environments." },
  { id: 4, title: "City", category: "Commercial", image: "https://images.unsplash.com/photo-1637536701374-073adb2ee745?q=80&w=1200", description: "Urban rhythm captured through a series of fast-paced street commissions." },
  { id: 5, title: "Nature", category: "Nature", image: "https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=1200", description: "An intimate look at the silent conversations between flora and light." },
  { id: 6, title: "Brand", category: "Brand", image: "https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=1200", description: "Identity design through the lens of visual storytelling." },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const Home: React.FC = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % PROJECTS.length);
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="pt-24 px-4 lg:h-screen lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[calc(100vh-120px)]">
        {/* Left: Fixed Hero Slider */}
        <div className="lg:col-span-6 h-full flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-1 rounded-3xl overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={heroIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={PROJECTS[heroIndex].image}
                  alt={PROJECTS[heroIndex].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />
            
            {/* Navigation Controls */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-2">
              <button 
                onClick={prevHero}
                className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2">
              <button 
                onClick={nextHero}
                className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Current Feature</span>
                <h3 className="text-white text-3xl font-light">{PROJECTS[heroIndex].title}</h3>
                <button 
                  onClick={() => setSelectedProject(PROJECTS[heroIndex])}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#c5e6a6] text-black text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Expand Project
                </button>
              </div>
              <div className="flex gap-2">
                {PROJECTS.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-500 ${idx === heroIndex ? "w-8 bg-white" : "w-2 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-[#111] rounded-3xl p-6 flex items-center justify-between border border-white/5"
          >
             <div className="flex items-center gap-3">
                <Camera className="text-white/40 w-5 h-5" />
                <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Interactive Portfolio Explorer</span>
             </div>
             <ArrowUpRight className="text-white/20 w-4 h-4" />
          </motion.div>
        </div>

        {/* Right: Scrolling Content */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-6 lg:overflow-y-auto lg:pr-2 flex flex-col gap-4 pb-12 custom-scrollbar"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants} className="bg-[#111] rounded-3xl p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1632287048491-d718911305d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                    alt="Ema Hanssen"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-white font-semibold">Ema Hanssen</h2>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Visual Artist</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Click any project card to view full details and high-resolution visuals.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <SocialLink icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <SocialLink icon={<BookOpen className="w-4 h-4" />} label="Rednote" />
              <SocialLink icon={<Palette className="w-4 h-4" />} label="Behance" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex items-center justify-between px-2 mt-4">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Curated Grid</span>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-bold uppercase tracking-widest border border-white/5">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                   <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                   <div className="flex items-center gap-2 mt-2">
                      <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">View Details</span>
                      <ArrowUpRight className="w-3 h-3 text-white/40" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                    <span className="text-white/80 font-mono">2026</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Role</span>
                    <span className="text-white/80">Director of Photography</span>
                  </div>
                  <button className="mt-4 w-full bg-white text-black rounded-2xl p-5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5e6a6] transition-colors">
                    View Full Gallery
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
    whileHover={{ x: 5 }}
    className="flex items-center justify-between p-3 rounded-xl bg-[#111] border border-white/5 transition-all group hover:bg-[#1a1a1a]"
  >
    <div className="flex items-center gap-3">
      <span className="text-white/40 group-hover:text-white transition-colors">{icon}</span>
      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white transition-colors" />
  </motion.button>
);
