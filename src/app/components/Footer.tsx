import React from "react";
import { Bookmark, Instagram, Palette } from "lucide-react";
import footerVideo from "../../assets/footer-bg.mp4";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden mt-4 mx-4 rounded-3xl mb-4">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={footerVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-10 md:p-20 min-h-[320px]">
        <div className="flex h-full flex-col items-center justify-center gap-10">
          <div className="flex items-center gap-4">
            <a
              href="https://www.xiaohongshu.com/user/profile/65d438b0000000000401cec4"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              aria-label="Xiaohongshu"
            >
              <Bookmark className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/gossip_duck_/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.behance.net/mongjonah"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              aria-label="Behance"
            >
              <Palette className="w-5 h-5" />
            </a>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            © 2025 <span className="text-[#c5e6a6]">Gossip Duck</span> Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
};
