import React from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Instagram, BookOpen, Palette, ChevronLeft, ChevronRight, ArrowUpRight, Mail, Camera } from "lucide-react";
import { motion } from "motion/react";

const PROJECTS = [
  { id: 1, title: "Beige", category: "Commercial", image: "https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=800" },
  { id: 2, title: "Darkness", category: "Illustration", image: "https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=800" },
  { id: 3, title: "Gentlemen", category: "Editorial", image: "https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?q=80&w=800" },
  { id: 4, title: "City", category: "Commercial", image: "https://images.unsplash.com/photo-1637536701374-073adb2ee745?q=80&w=800" },
  { id: 5, title: "Nature", category: "Nature", image: "https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=800" },
  { id: 6, title: "Brand", category: "Brand", image: "https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=800" },
];

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const Home: React.FC = () => {
  return (
    <div className="pt-24 px-4 lg:h-screen lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[calc(100vh-120px)]">
        {/* Left: Fixed Area (on desktop) */}
        <div className="lg:col-span-6 h-full flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-1 rounded-3xl overflow-hidden group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1635397122485-3ef245c0b8ac?q=80&w=1200"
              alt="Hero work"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-medium hover:bg-white/40 transition-colors">
                View Project
              </button>
              <div className="flex gap-1 ml-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-[#111] rounded-3xl p-6 flex items-center justify-between border border-white/5"
          >
             <div className="flex items-center gap-3">
                <Camera className="text-white/40 w-5 h-5" />
                <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Selected Editorial Work 2026</span>
             </div>
             <ArrowUpRight className="text-white/20 w-4 h-4" />
          </motion.div>
        </div>

        {/* Right: Scrolling Content */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-6 lg:overflow-y-auto lg:pr-2 flex flex-col gap-4 pb-12 custom-scrollbar"
        >
          {/* Profile Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              variants={itemVariants}
              className="bg-[#111] rounded-3xl p-6 flex flex-col gap-6 border border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1632287048491-d718911305d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                    alt="Ema Hanssen"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-white font-semibold">Ema Hanssen</h2>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Prague, CZ</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Visual storyteller specializing in high-fashion editorial and cinematic commercial photography. Merging traditional artistry with contemporary digital aesthetics.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <SocialLink icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <SocialLink icon={<BookOpen className="w-4 h-4" />} label="Rednote" />
              <SocialLink icon={<Palette className="w-4 h-4" />} label="Behance" />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black rounded-xl p-3 flex items-center justify-between group transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-widest">Connect</span>
                <Mail className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex items-center justify-between px-2 mt-4">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Latest Commissions</span>
            <button className="text-white/60 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Archives</button>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-bold uppercase tracking-widest border border-white/5 opacity-0 group-hover:opacity-100 transition-all">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                   <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                   <div className="w-8 h-0.5 bg-white/40 mt-2" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            variants={itemVariants}
            whileHover={{ backgroundColor: "#1a1a1a" }}
            className="w-full bg-[#111] text-white/40 text-[10px] font-bold uppercase tracking-widest py-6 rounded-3xl transition-colors border border-white/5 mt-4"
          >
            Explore Portfolio (42+)
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <motion.button 
    whileHover={{ x: 5, backgroundColor: "#1a1a1a" }}
    className="flex items-center justify-between p-3 rounded-xl bg-[#111] border border-white/5 transition-all group"
  >
    <div className="flex items-center gap-3">
      <span className="text-white/40 group-hover:text-white transition-colors">{icon}</span>
      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white transition-colors" />
  </motion.button>
);
