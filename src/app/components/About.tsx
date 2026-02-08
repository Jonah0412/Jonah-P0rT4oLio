import React from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Instagram, BookOpen, Palette, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";

const CLIENTS = ["Kanba", "Goldline", "Asgardia", "Outosia", "Vertex"];
const EXHIBITIONS = [
  { title: "Through the Lens", year: "2024" },
  { title: "Candid Connections", year: "2024" },
  { title: "Urban Stories", year: "2023" },
  { title: "Nature's Palette", year: "2023" },
  { title: "Moments Unseen", year: "2023" },
  { title: "Reflections of Prague", year: "2022" },
];
const AWARDS = [
  { title: "Prague Photography Award", year: "2024" },
  { title: "European Fine Art Photography", year: "2024" },
  { title: "Best Urban Photography", year: "2023" },
  { title: "Nature Photographer of the Year", year: "2023" },
  { title: "Candid Moments Award", year: "2022" },
  { title: "Excellence in Visual Storytelling", year: "2022" },
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

export const About: React.FC = () => {
  return (
    <div className="pt-24 px-4 lg:h-screen lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[calc(100vh-120px)]">
        {/* Left: Huge Profile Image (Fixed on desktop) */}
        <div className="lg:col-span-6 h-full rounded-3xl overflow-hidden relative">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=1200"
              alt="About Ema"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
               <motion.span 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="text-white font-bold tracking-[0.5em] uppercase text-xs opacity-60"
               >
                 Est. 2018
               </motion.span>
               <motion.h2 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.7 }}
                 className="text-white text-4xl font-light mt-2"
               >
                 Ema Hanssen
               </motion.h2>
            </div>
          </motion.div>
        </div>

        {/* Right: Content (Scrolling) */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-6 lg:overflow-y-auto lg:pr-2 flex flex-col gap-4 pb-12 custom-scrollbar"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-[#111] rounded-3xl p-8 lg:p-16 flex flex-col gap-16 border border-white/5"
          >
            <section className="flex flex-col gap-8">
              <h3 className="text-white text-4xl font-light leading-tight">
                Capturing authentic moments through a cinematic lens.
              </h3>
              <div className="space-y-6 text-white/50 text-base leading-relaxed max-w-xl">
                <p>
                  Based in Prague, I specialize in editorial and high-fashion photography. My work is driven by a passion for visual storytelling and the pursuit of raw, unfiltered emotion in every frame.
                </p>
                <p>
                  I believe that photography is more than just capturing light; it's about capturing a feeling. Whether in the studio or on location, my goal is to create images that resonate and inspire.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-8 border-t border-white/5 pt-16">
               <div className="flex items-center justify-between">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Industry Trusted</span>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 items-center opacity-30 grayscale hover:grayscale-0 transition-all">
                    {CLIENTS.map(client => (
                      <span key={client} className="text-white font-bold tracking-tighter text-2xl">{client}</span>
                    ))}
                  </div>
               </div>
            </section>

            <section className="flex flex-col gap-12 border-t border-white/5 pt-16">
               <div className="flex flex-col gap-4">
                 <h3 className="text-white text-2xl font-light">Recent Exhibitions</h3>
                 <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Showcasing visual narratives worldwide</p>
               </div>
               <div className="flex flex-col">
                  {EXHIBITIONS.map((ex, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between py-6 border-b border-white/5 group cursor-pointer transition-all"
                    >
                      <span className="text-white/80 group-hover:text-white transition-colors text-lg">{ex.title}</span>
                      <div className="flex items-center gap-6">
                        <span className="text-white/20 text-xs font-mono">{ex.year}</span>
                        <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white group-hover:rotate-45 transition-all" />
                      </div>
                    </motion.div>
                  ))}
               </div>
            </section>

            <section className="flex flex-col gap-12 border-t border-white/5 pt-16">
               <div className="flex flex-col gap-4">
                 <h3 className="text-white text-2xl font-light">Accolades</h3>
                 <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Recognition for creative excellence</p>
               </div>
               <div className="flex flex-col">
                  {AWARDS.map((aw, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between py-6 border-b border-white/5 group cursor-pointer transition-all"
                    >
                      <span className="text-white/80 group-hover:text-white transition-colors text-lg">{aw.title}</span>
                      <span className="text-white/20 text-xs font-mono">{aw.year}</span>
                    </motion.div>
                  ))}
               </div>
            </section>
            
             <section className="flex flex-col gap-8 border-t border-white/5 pt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SocialLink icon={<Instagram className="w-4 h-4" />} label="Instagram" />
                <SocialLink icon={<BookOpen className="w-4 h-4" />} label="Rednote" />
                <SocialLink icon={<Palette className="w-4 h-4" />} label="Behance" />
              </div>
              <motion.button 
                whileHover={{ scale: 1.01, backgroundColor: "#fff", color: "#000" }}
                className="w-full bg-white/5 text-white border border-white/10 rounded-2xl p-6 flex items-center justify-between group transition-all"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Get in touch</span>
                <Mail className="w-5 h-5" />
              </motion.button>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <motion.button 
    whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
    className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 transition-colors group"
  >
    <div className="flex items-center gap-3">
      <span className="text-white/30 group-hover:text-white transition-colors">{icon}</span>
      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-white transition-colors" />
  </motion.button>
);
