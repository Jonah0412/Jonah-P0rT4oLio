import React, { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Instagram, BookOpen, Palette, ChevronLeft, ChevronRight, ArrowUpRight, Mail, Camera, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const baseUrl = import.meta.env.BASE_URL;
const assetPath = (path: string) => encodeURI(`${baseUrl}${path}`);

const PROJECTS = [
  {
    id: 1,
    title: "Digital Art & Manipulation",
    category: "Digital Imaging",
    image: assetPath("portfolio-v1/images/Mong_Foo_Yuen_2300143_GD_Final Project_Concept_1.jpg"),
    pdf: assetPath("portfolio-v1/pdfs/Digital Art & Manipulation.pdf"),
    description: "Surreal compositions and visual storytelling using advanced photo manipulation.",
  },
  {
    id: 2,
    title: "Research & Development",
    category: "Typography",
    image: assetPath("portfolio-v1/images/ikf 1.png"),
    pdf: assetPath("portfolio-v1/pdfs/Research And Development.pdf"),
    description: "Type exploration and development across multiple design systems.",
  },
  {
    id: 3,
    title: "Conceptual Photography",
    category: "Digital Imaging",
    image: assetPath("portfolio-v1/images/IMG_7709.jpg"),
    pdf: assetPath("portfolio-v1/pdfs/Conceptual Photgraphy.pdf"),
    description: "Narrative-driven photography exploring mood, light, and subject.",
  },
  {
    id: 4,
    title: "Layout Components",
    category: "Layout Design",
    image: assetPath("portfolio-v1/images/kaws.png"),
    pdf: assetPath("portfolio-v1/pdfs/LAYOUT COMPONENTS.pdf"),
    description: "Editorial layouts focused on hierarchy, rhythm, and composition.",
  },
  {
    id: 5,
    title: "Commercial Photography - Food",
    category: "Digital Imaging",
    image: assetPath("portfolio-v1/images/FINAL.jpg"),
    pdf: assetPath("portfolio-v1/pdfs/Commercial Photography - FOOD.pdf"),
    description: "Product-focused photography with strong lighting direction and styling.",
  },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Home: React.FC = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % PROJECTS.length);
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="pt-24 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Fixed Hero Slider */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
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
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Featured Project</span>
                <h3 className="text-white text-3xl font-light">{PROJECTS[heroIndex].title}</h3>
                <button 
                  onClick={() => setSelectedProject(PROJECTS[heroIndex])}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#c5e6a6] text-black text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  View Project
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
            className="bg-[#111] rounded-3xl p-3 border border-white/5"
          >
            <div className="flex items-center justify-between px-3 pt-2 pb-3">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Spotify Playlist
              </span>
              <ArrowUpRight className="text-white/20 w-4 h-4" />
            </div>
            <iframe
              className="w-full h-20 rounded-2xl"
              src="https://open.spotify.com/embed/playlist/6NspVwDztOdaxAUA1dyZkr?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            />
          </motion.div>
        </div>

        {/* Right: Scrolling Content */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-6 lg:pr-2 flex flex-col gap-4 pb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants} className="bg-[#111] rounded-3xl p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <ImageWithFallback
                    src={assetPath("portfolio-v1/images/IMG_0728.JPG")}
                    alt="Jonah Mong"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-white font-semibold">Jonah Mong</h2>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Freelancer & Graphic Designer</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                I craft bold, functional visuals for branding, print, and digital. Let’s make your vision shine.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2 md:mt-6">
              <SocialLink icon={<Instagram className="w-4 h-4" />} label="Instagram" href="https://www.instagram.com/gossip_duck_/" />
              <SocialLink icon={<Instagram className="w-4 h-4" />} label="Instagram (Personal)" href="https://www.instagram.com/jmfy_04?igsh=eGRiNnU5bWVtZjNh&utm_source=qr" />
              <SocialLink icon={<BookOpen className="w-4 h-4" />} label="Xiaohongshu" href="https://www.xiaohongshu.com/user/profile/65d438b0000000000401cec4" />
              <SocialLink icon={<Palette className="w-4 h-4" />} label="Behance" href="https://www.behance.net/mongjonah" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex items-center justify-between px-2 mt-4">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Featured Projects</span>
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-start justify-center p-4 lg:p-12 overflow-y-auto"
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
                  <h2 className="text-white text-4xl md:text-6xl font-light mb-8 tracking-tighter">{selectedProject.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-6">
                  <div className="flex items-center justify-between border-t border-white/5 pt-8">
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Year</span>
                    <span className="text-white/80 font-mono">2025</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Role</span>
                    <span className="text-white/80">Freelance Designer</span>
                  </div>
                  <a
                    href={selectedProject.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 w-full bg-white text-black rounded-2xl p-5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5e6a6] transition-colors text-center"
                  >
                    View Project PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialLink = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => (
  <motion.a
    whileHover={{ x: 5 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between p-3 rounded-xl bg-[#111] border border-white/5 transition-all group hover:bg-[#1a1a1a]"
  >
    <div className="flex items-center gap-3">
      <span className="text-white/40 group-hover:text-white transition-colors">{icon}</span>
      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white transition-colors" />
  </motion.a>
);
