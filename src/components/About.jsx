import React from "react";
import Line from "./Line";
import Links from "./Links";
import HoverOutline from "./HoverOutline";
import { FaArrowRight } from "react-icons/fa";

export default function About({ aboutRef }) {
  const skills = [
    "Python",
    "C",
    "C++",
    "Java",
    "Node.js",
    "Express.js",
    "Flask",
    "PyTorch",
    "PostgreSQL",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React.js",
    "Axios",
    "Zustand",
    "OAuth 2.0",
    "Git",
    "Agile",
    "VHDL",
    "MIPs Assembly",
  ];
  return (
    <section ref={aboutRef}>
      <div className="mb-10 flex items-center gap-4">
        <h1 className="text-4xl font-bold">
          About<span className="text-primary">.</span>
        </h1>
        <Line />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-2">
          <p>
            Hey, I'm Vincent. I'm studying Computer Engineering at UNSW.
            Sometimes I leave my PC to touch grass. I'm passionate about AI and
            Frontend Development.
          </p>
          <p>
            Casually self-learning the piano and reading Vagabond for the nth
            time.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-secondary">
              <span>Find me here</span>
              <FaArrowRight />
            </div>
            <Links />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((tool, i) => (
              <HoverOutline key={`tools-${i}`}>{tool}</HoverOutline>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
