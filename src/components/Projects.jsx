import React from "react";
import Line from "./Line";
import Project from "./Project";

export default function Projects({ projectsRef }) {
  const projects = [
    {
      "project-media": "occlusion",
      "project-name": "Occlusion-aware Engagement Detection",
      "project-tools": ["Python", "PyTorch", "Computer Vision"],
      "project-description":
        "My 2024 Thesis. Researching and developing an occlusion-aware engagement detection framework that improved state-of-the-art engagement detection by 5.14%.",
      "project-link":
        "https://github.com/teddyld/occlusion-aware-engagement-detection",
    },
    {
      "project-media": "ist",
      "project-name": "Image Style Transfer",
      "project-tools": ["Python", "PyTorch", "Computer Vision"],
      "project-description":
        "I provide insight into the tradeoffs between traditional CNNs and Generative Networks for Image Style Transfer.",
      "project-link": "https://github.com/teddyld/image-style-transfer",
    },
    {
      "project-media": "knn",
      "project-name": "Hardware Accelerated kNN",
      "project-tools": ["C", "VHDL", "Machine Learning"],
      "project-description":
        "I accelerated the k-Nearest Neighbours algorithm using the MNIST handwriting verification dataset, providing a 100x decrease in execution time with no loss in accuracy through hardware optimization techniques.",
      "project-link": "https://github.com/teddyld/hardware-accelerated-knn",
    },
  ];

  return (
    <section ref={projectsRef}>
      <div className="mb-10 flex items-center gap-4">
        <Line />
        <h1 className="text-4xl font-bold">
          Projects<span className="text-primary">.</span>
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
