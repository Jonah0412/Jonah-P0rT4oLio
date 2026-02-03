import React, { useState, useEffect } from "react";
import { Navbar } from "@/app/components/Navbar";
import { Home } from "@/app/components/Home";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Work } from "@/app/components/Work";
import { Footer } from "@/app/components/Footer";
import { Loader } from "@/app/components/Loader";
import { motion, AnimatePresence } from "motion/react";

type Page = "home" | "work" | "about" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home key="home" />;
      case "work":
        return <Work key="work" />;
      case "about":
        return <About key="about" />;
      case "contact":
        return <Contact key="contact" />;
      default:
        return <Home key="home" />;
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="dark min-h-screen bg-black text-white selection:bg-[#c5e6a6] selection:text-black font-sans scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar currentPath={currentPage} onNavigate={(path) => setCurrentPage(path as Page)} />
          
          <main className="max-w-[1536px] mx-auto overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPage}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}
