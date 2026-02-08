import React, { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const baseUrl = import.meta.env.BASE_URL;
const assetPath = (path: string) => encodeURI(`${baseUrl}${path}`);

const rawGalleryItems = [
  { title: "Edit 1", file: "edit 1.jpg" },
  { title: "Edited 2", file: "edited 2.jpg" },
  { title: "IMG 0728", file: "IMG_0728.JPG" },
  { title: "Final", file: "FINAL.jpg" },
  { title: "Kaws", file: "kaws.png" },
  { title: "Digital Art Concept 1", file: "Mong_Foo_Yuen_2300143_GD_Final Project_Concept_1.jpg" },
  { title: "IKF 1", file: "ikf 1.png" },
  { title: "IMG 7709", file: "IMG_7709.jpg" },
  { title: "IMG 7522 Copy", file: "IMG_7522 copy.jpg" },
  { title: "Editied A1", file: "editied A1.png" },
];

export const Gallery: React.FC = () => {
  const items = useMemo(
    () =>
      rawGalleryItems.map((item) => ({
        ...item,
        src: assetPath(`portfolio-v1/images/${item.file}`),
      })),
    []
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = () => setActiveIndex(null);
  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };
  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div className="pt-24 px-4">
      <div className="max-w-[1536px] mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            Creative <span className="text-[#c5e6a6]">Gallery</span>
          </h1>
          <p className="text-white/40 mt-3 max-w-xl">
            A curated visual diary from the portfolio v1 collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <button
              key={item.file}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0a] aspect-[4/5]"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <button
                onClick={closeModal}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <button
              onClick={showPrev}
              className="hidden md:flex absolute left-6 w-12 h-12 rounded-full bg-white/10 border border-white/10 items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-5xl w-full">
              <img
                src={items[activeIndex].src}
                alt={items[activeIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white/70 text-center mt-4 text-sm">
                {items[activeIndex].title} — {activeIndex + 1} / {items.length}
              </p>
            </div>

            <button
              onClick={showNext}
              className="hidden md:flex absolute right-6 w-12 h-12 rounded-full bg-white/10 border border-white/10 items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
