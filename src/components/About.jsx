import React from "react";
import Line from "./Line";
import Links from "./Links";
import HoverOutline from "./HoverOutline";

export default function About({ aboutRef }) {
  const currTools = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Tailwind CSS",
    "MUI",
    "ChakraUI",
    "NodeJS",
    "Express",
    "Python",
    "PyTorch",
    "Git",
  ];
  const prevTools = ["C", "MIPS Assembly", "Java", "VHDL"];
  return (
    <section ref={aboutRef}>
      <div className="mb-10 flex items-center gap-4">
        <h1 className="text-4xl font-bold">
          About<span className="text-indigo-500">.</span>
        </h1>
        <Line />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-2">
          <p>
            Yo, I'm Vincent. I'm studying Computer Engineering at UNSW.
            Sometimes I leave my PC to touch grass. I'm passionate about AI
            (somebody's gotta create those AI catgirls) and Frontend
            Development.
          </p>
          <p>
            Casually self-learning the piano and reading Vagabond for the nth
            time.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-indigo-300">Find me here</span>
            <svg
              stroke="rgb(165 180 252)"
              fill="rgb(165 180 252)"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
            </svg>
            <Links />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold">Things I use often</h2>
          <div className="flex flex-wrap gap-2">
            {currTools.map((tool, i) => (
              <HoverOutline key={`tools-${i}`}>{tool}</HoverOutline>
            ))}
          </div>
          <h2 className="font-bold">Things I used before</h2>
          <div className="flex flex-wrap gap-2">
            {prevTools.map((tool) => (
              <HoverOutline key={`tools-${tool}`}>{tool}</HoverOutline>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
