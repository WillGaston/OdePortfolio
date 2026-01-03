import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function PhotoCard({ url, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
      className="mb-4 break-inside-avoid"
    >
      <img
        src={url}
        alt="Gallery work"
        loading="lazy"
        className="w-full h-auto block rounded-sm hover:opacity-90 transition-opacity"
      />
    </motion.div>
  );
}

export default function GalleryGrid({ photoshoots, categories }) {
  const [activeSection, setActiveSection] = useState(categories[0].id);
  const [columnCount, setColumnCount] = useState(3);
  const sectionRefs = useRef({});
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumnCount(3);
      else if (window.innerWidth >= 768) setColumnCount(2);
      else setColumnCount(1);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    Object.values(sectionRefs.current).forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [photoshoots]);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const renderMasonry = (photos) => {
    const columns = Array.from({ length: columnCount }, () => []);
    photos.forEach((photo, index) => {
      columns[index % columnCount].push(photo);
    });

    return (
      <div className="flex gap-4">
        {columns.map((colPhotos, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4">
            {colPhotos.map((url, imgIdx) => (
              <PhotoCard key={imgIdx} url={url} index={imgIdx} />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] mt-12 text-neutral-900">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100]" 
        style={{ scaleX, originX: 0 }}
      />
      <div className="max-w-[1500px] mx-auto px-4 flex flex-col lg:flex-row gap-4">
        <aside className="hidden lg:flex flex-col sticky top-0 h-screen min-w-[100px] max-w-[120px] justify-center">
          <nav className="space-y-4 border-l border-neutral-200 pl-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`block text-[9px] uppercase tracking-[0.2em] text-left transition-all ${
                  activeSection === cat.id ? "text-black font-bold" : "text-neutral-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 py-12 lg:py-24">
          {categories.map((category) => {
            const categoryPhotos = photoshoots
              .filter(s => s.tags.includes(category.id))
              .flatMap(s => s.photos);
            if (categoryPhotos.length === 0) return null;
            return (
              <section 
                key={category.id} 
                id={category.id}
                ref={el => sectionRefs.current[category.id] = el}
                className="mb-24 lg:mb-32"
              >
                <header className="mb-8 px-1">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                    {category.label}
                  </h2>
                </header>
                {renderMasonry(categoryPhotos)}
              </section>
            );
          })}
        </main>
	      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[35] w-[90%] max-w-sm">
          <nav className="flex items-center justify-around gap-2 bg-black/90 backdrop-blur-md p-2 rounded-full shadow-2xl overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`px-3 py-1.5 rounded-full text-[9px] font-medium uppercase tracking-tighter transition-all ${
                  activeSection === cat.id ? 'bg-white text-black' : 'text-neutral-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <footer className="px-6 py-12 text-center border-t border-slate-50">
        <p className="text-[10px] text-black uppercase tracking-[0.3em] font-medium">
          Odelia Lim | @avosfilm
        </p>
      </footer>
    </div>
  );
}
