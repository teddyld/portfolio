import React from "react";
import { useScroll, motion } from "framer-motion";

export default function Sidebar({ aboutRef, projectsRef, contactRef }) {
  const links = [
    ["About", aboutRef],
    ["Projects", projectsRef],
    ["Contact", contactRef],
  ];

  const { scrollYProgress } = useScroll();

  // Scroll to ref
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="no-scrollbar sticky left-0 top-0 z-20 flex h-screen flex-col items-center overflow-y-scroll bg-neutral-950">
      <motion.span
        style={{
          scaleY: scrollYProgress,
        }}
        className="absolute right-0 h-screen w-[2px] origin-top bg-gradient-to-b from-indigo-700 to-indigo-300"
      />
      {links.map(([title, ref], i) => (
        <a
          key={`sidebar-link-${i}`}
          className="text-vertical flex h-24 w-full cursor-pointer items-center justify-center border-r-2 border-transparent opacity-100 hover:border-zinc-500 hover:bg-zinc-800"
          onClick={() => handleScroll(ref)}
        >
          {title}
        </a>
      ))}
    </nav>
  );
}
