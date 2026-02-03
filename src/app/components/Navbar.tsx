import React from "react";
import { motion } from "motion/react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const navItems = [
    { name: "Work", path: "work" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/50">
      <div 
        onClick={() => onNavigate("home")}
        className="px-5 py-2 cursor-pointer flex items-center gap-3 group"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#c5e6a6] group-hover:scale-125 transition-transform" />
        <span className="font-bold tracking-widest text-white text-[10px] uppercase">hanssen</span>
      </div>
      
      <div className="flex items-center gap-1 ml-4 pr-1">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => onNavigate(item.path)}
            className={`px-4 py-1.5 rounded-full text-xs transition-colors ${
              currentPath === item.path
                ? "bg-white text-black"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.name}
          </button>
        ))}
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 ml-2 mr-1" />
      </div>
    </nav>
  );
};
