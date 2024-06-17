import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { FaArrowUp } from "react-icons/fa";

function App() {
  const aboutRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const scrollToTopRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollToTopRef.current.style.display = "block";
      } else {
        scrollToTopRef.current.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full bg-neutral-900 text-white">
      <div className="grid grid-cols-[54px_1fr]">
        <Sidebar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <div>
          <Header />
          <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
            <Hero contactRef={contactRef} />
            <About aboutRef={aboutRef} />
            <Projects projectsRef={projectsRef} />
            <Contact contactRef={contactRef} />
          </div>
        </div>
      </div>
      <button
        ref={scrollToTopRef}
        className="fixed bottom-8 right-10 hidden rounded-full border-2 border-white bg-transparent p-2 backdrop-blur-sm transition-colors hover:bg-indigo-300"
        onClick={handleScrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
