import React from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Instagram, BookOpen, Palette, ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

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

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 px-4 lg:h-screen lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[calc(100vh-120px)]">
        {/* Left: Fixed Image (on desktop) */}
        <div className="lg:col-span-6 h-full rounded-3xl overflow-hidden relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full h-full relative"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1637536701374-073adb2ee745?q=80&w=1200"
              alt="Studio"
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="text-white text-5xl font-light mb-6"
               >
                 Let's start a project
               </motion.h2>
               <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-8">
                 Currently accepting new commissions for 2026. Reach out and I'll get back to you within 24 hours.
               </p>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Based in</p>
                    <p className="text-white text-sm font-medium">Prague, Czech Republic</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Scrolling Form and Details */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-6 lg:overflow-y-auto lg:pr-2 flex flex-col gap-4 pb-12 custom-scrollbar"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-[#111] rounded-3xl p-8 lg:p-12 border border-white/5"
          >
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Alexander Black" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="E.g. alex@studio.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Tell me about your vision</label>
                <textarea 
                  placeholder="Tell me about your project, goals, and timeline..." 
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-white/30 transition-all resize-none placeholder:text-white/20"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.01, backgroundColor: "#f3f3f3" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black rounded-2xl p-5 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3"
              >
                Send Inquiry <Send className="w-3.5 h-3.5" />
              </motion.button>
            </form>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <motion.div variants={itemVariants} className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col justify-between gap-8">
                <div>
                  <h3 className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-6">Social Discovery</h3>
                  <div className="flex flex-col gap-2">
                    <MiniSocial label="Instagram" icon={<Instagram className="w-4 h-4" />} />
                    <MiniSocial label="Rednote" icon={<BookOpen className="w-4 h-4" />} />
                    <MiniSocial label="Behance" icon={<Palette className="w-4 h-4" />} />
                  </div>
                </div>
             </motion.div>
             <motion.div variants={itemVariants} className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 group">
                <div className="h-40 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?q=80&w=400"
                    alt="Map mockup"
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-xs font-medium">Vinohradská 121, Praha 3</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white transition-colors" />
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const MiniSocial = ({ label, icon }: { label: string, icon: React.ReactNode }) => (
  <motion.div 
    whileHover={{ x: 4 }}
    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group"
  >
    <div className="flex items-center gap-3">
       <span className="text-white/40 group-hover:text-white transition-colors">{icon}</span>
       <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
    <ArrowUpRight className="w-3 h-3 text-white/10 group-hover:text-white transition-colors" />
  </motion.div>
);
