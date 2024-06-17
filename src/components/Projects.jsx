import React from "react";
import Line from "./Line";
import Project from "./Project";

export default function Projects({ projectsRef }) {
  const projects = [
    {
      "project-media": "occlusion",
      "project-name": "Occlusion Aware Engagement Detection",
      "project-tools": ["Python", "PyTorch", "Computer Vision"],
      "project-description":
        "My 2024 Thesis. Developing an occlusion-aware engagement detection framework that extracts facial expressions and incorporates formative assessment to inform adaptive learning.",
      "project-link":
        "https://github.com/teddyld/occlusion-aware-engagement-detection",
      "project-detailed-description": [
        "I wanted to determine if occlusion-aware engagement detection models could offer improved performance over non-occlusion-aware models.",
      ],
    },
    {
      "project-media": "portfolio",
      "project-name": "This website",
      "project-tools": [
        "React",
        "Tailwind",
        "Framer Motion",
        "React Three Fiber",
      ],
      "project-description":
        'Modelled from the "Steam Dev Portfolio" template, created from scratch so that I could run free with Tailwind, Framer Motion and React Three Fiber.',
      "project-link": "https://github.com/teddyld/portfolio",
      "project-external":
        "https://portfolio-1mlrjbtnr-teddylds-projects.vercel.app/",
      "project-detailed-description": [
        "I started developing this project to create animated elements using Framer Motion and React Three Fiber and learn Tailwind.",
      ],
    },
  ];

  return (
    <section ref={projectsRef}>
      <div className="mb-10 flex items-center gap-4">
        <Line />
        <h1 className="text-4xl font-bold">
          Projects<span className="text-indigo-500">.</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project, i) => (
          <span key={`project-${i}`}>
            <Project project={project} />
          </span>
        ))}
      </div>
    </section>
  );
}
