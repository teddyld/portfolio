import React from "react";
import GitHub from "../Links/GitHub";
import External from "../Links/External";
import IstImage from "../../assets/ist.png";
import OcclusionImage from "../../assets/occlusion.jpg";
import KNNImage from "../../assets/knn.png";
import { motion } from "framer-motion";

export default function Project({ project }) {
  const parseProjectImage = (image) => {
    switch (image) {
      case "ist":
        return IstImage;
      case "occlusion":
        return OcclusionImage;
      case "knn":
        return KNNImage;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="group relative mb-2 aspect-video w-full overflow-hidden rounded-2xl bg-card">
          <img
            src={parseProjectImage(project["project-media"])}
            alt={`An image of the project called ${project["project-name"]}`}
            className={
              parseProjectImage(project["project-media"]) === KNNImage
                ? "h-full"
                : ""
            }
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-center text-xl font-bold">
            {project["project-name"]}
          </h2>
          <span className="flex gap-2 text-lg">
            <GitHub to={project["project-link"]} />
            {project["project-external"] && (
              <External to={project["project-external"]} />
            )}
          </span>
        </div>
        <div className="text-secondary">
          {project["project-tools"].join(" - ")}
        </div>
        <p>{project["project-description"]} </p>
      </div>
    </>
  );
}
