import React from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

const INFO_ITEMS = [
  { label: "Name", value: "Jonah Mong Foo Yuen" },
  { label: "Email", value: "mongjonah1229@gmail.com" },
  { label: "Phone", value: "+(60)18-614 0251" },
  { label: "Location", value: "Seremban, Negeri Sembilan" },
  { label: "Languages", value: "English, Mandarin, Malay" },
  { label: "Availability", value: "Freelance / Contract" },
];

const EDUCATION = [
  {
    title: "Bachelor of Graphic Design With Multimedia",
    school: "UTAR - Universiti Tunku Abdul Rahman",
    place: "Sungai Long, Kajang, Selangor",
    year: "2024 - Now",
  },
  {
    title: "Foundation In Arts",
    school: "UTAR - Universiti Tunku Abdul Rahman",
    place: "Sungai Long, Kajang, Selangor",
    year: "2023",
  },
  {
    title: "SPM",
    school: "SMK ST Paul",
    place: "Seremban, Negeri Sembilan",
    year: "2017 - 2021",
  },
  {
    title: "UPSR",
    school: "SJK(C) Ma Hwa",
    place: "Seremban, Negeri Sembilan",
    year: "2011 - 2016",
  },
];

const EXPERIENCE = [
  { title: "Freelancer", company: "Self-Employed", year: "2025 Jun - Now" },
  { title: "Seller", company: "Bestphone Enterprise", year: "2024 Dec - 2025 Feb" },
  { title: "Barista / Waiter", company: "Toast House", year: "2023 May - Jun" },
  { title: "Chef / Manager", company: "WeGathering 2 Cafe", year: "2022 Mar - Dec" },
  { title: "Cashier / Chef Assistance", company: "Restaurant 7 Warna Kopitiam", year: "2020 Sep - 2021 Jan" },
  { title: "Waiter", company: "Restaurant Sin Tai Hua", year: "2019 Mar - 2020 Nov" },
];

const SKILLS = [
  { name: "Figma", level: "40%" },
  { name: "Adobe Photoshop", level: "90%" },
  { name: "Adobe Illustrator", level: "80%" },
  { name: "Adobe After Effects", level: "60%" },
  { name: "Adobe Indesign", level: "60%" },
  { name: "HTML/CSS", level: "85%" },
  { name: "Blender", level: "40%" },
  { name: "Capcut", level: "95%" },
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
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const About: React.FC = () => {
  return (
    <div className="pt-24 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Huge Profile Image (Fixed on desktop) */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] rounded-3xl overflow-hidden relative bg-[#0a0a0a]">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full lg:p-12 flex items-center justify-center"
          >
            <ImageWithFallback
              src="/portfolio-v1/images/IMG_3798.JPG"
              alt="About Jonah Mong"
              className="w-full h-full object-contain"
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
                 Jonah Mong
               </motion.h2>
            </div>
          </motion.div>
        </div>

        {/* Right: Content (Scrolling) */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-6 lg:pr-2 flex flex-col gap-4 pb-12"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-[#111] rounded-3xl p-8 lg:p-16 flex flex-col gap-16 border border-white/5"
          >
            <section className="flex flex-col gap-8">
              <h3 className="text-white text-4xl font-light leading-tight">
                Jonah Mong — Freelancer & Graphic Designer
              </h3>
              <div className="space-y-6 text-white/50 text-base leading-relaxed max-w-xl">
                <p>
                  Freelance Graphic Designer crafting bold, functional visuals for branding, print, and digital.
                  I turn ideas into eye-catching designs that help clients stand out—no fluff, just clear, creative solutions.
                </p>
                <p>
                  Let’s make your vision shine.
                </p>
              </div>
              <a
                href={encodeURI("/portfolio-v1/pdfs/MONG FOO YUEN RESUME.pdf")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#c5e6a6] transition-colors"
              >
                Download Resume
              </a>
            </section>

            <section className="flex flex-col gap-8 border-t border-white/5 pt-16">
              <div className="flex flex-col gap-6">
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Profile Info</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {INFO_ITEMS.map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{item.label}</p>
                      <p className="text-white/80 text-sm mt-2">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-12 border-t border-white/5 pt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-2xl font-light">Educational Background</h3>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Learning & Development</p>
              </div>
              <div className="flex flex-col">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex flex-col gap-2 py-6 border-b border-white/5 group transition-all"
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors text-lg">{edu.title}</span>
                    <span className="text-white/40 text-sm">{edu.school}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-white/20 text-xs font-mono">{edu.place}</span>
                      <span className="text-white/20 text-xs font-mono">{edu.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-12 border-t border-white/5 pt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-2xl font-light">Work Experience</h3>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Roles & Responsibilities</p>
              </div>
              <div className="flex flex-col">
                {EXPERIENCE.map((job, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between py-6 border-b border-white/5 group transition-all"
                  >
                    <div>
                      <span className="text-white/80 group-hover:text-white transition-colors text-lg">{job.title}</span>
                      <p className="text-white/30 text-sm">{job.company}</p>
                    </div>
                    <span className="text-white/20 text-xs font-mono">{job.year}</span>
                  </motion.div>
                ))}
              </div>
            </section>
            
             <section className="flex flex-col gap-8 border-t border-white/5 pt-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-2xl font-light">Application Skills</h3>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Tools & Software</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/80 text-sm">{skill.name}</span>
                      <span className="text-white/30 text-xs font-mono">{skill.level}</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#c5e6a6]" style={{ width: skill.level }} />
                    </div>
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.01 }}
                className="w-full bg-white/5 text-white border border-white/10 rounded-2xl p-6 flex items-center justify-between group transition-all hover:bg-white hover:text-black"
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

