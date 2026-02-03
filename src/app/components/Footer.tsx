import React from "react";
import { ArrowUp, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import footerBg from "figma:asset/3a8e75158e08ea4c0d8147a486051d4696549a07.png";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden mt-4 mx-4 rounded-3xl mb-4">
      {/* Background Image/Overlay from Figma */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={footerBg} 
          alt="background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-8 md:p-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-medium leading-tight mb-8"
            >
              Let's create something extraordinary together. Available for worldwide projects.
            </motion.h2>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full pl-6 pr-2 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="text-xs font-bold tracking-widest uppercase">Work with me</span>
              <div className="w-10 h-10 rounded-full bg-[#c5e6a6] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.button>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Navigate</h4>
              <ul className="space-y-4 text-sm font-medium">
                {["Home", "Work", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white/60 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Connect</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-white/60 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Rednote</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Behance</a></li>
              </ul>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[14vw] font-bold tracking-tighter leading-none mb-4 select-none"
          >
            Hanssen
          </motion.h1>
          
          <div className="flex justify-between items-center text-[10px] font-medium tracking-widest uppercase text-white/30 border-t border-white/5 pt-8">
            <p>© 2026 EMA HANSSEN. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
