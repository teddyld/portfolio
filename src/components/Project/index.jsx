import React from "react";
import GitHub from "../Links/GitHub";
import External from "../Links/External";
import ProjectModal from "./ProjectModal";
import PortfolioImage from "../../assets/portfolio.png";
import OcclusionImage from "../../assets/occlusion.jpg";
import Line from "../Line";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

export default function Project({ project }) {
  const parseProjectImage = (image) => {
    switch (image) {
      case "portfolio":
        return PortfolioImage;
      case "occlusion":
        return OcclusionImage;
      default:
        break;
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div
          className="group relative mb-2 aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-card"
          onClick={handleOpen}
        >
          <motion.img
            src={parseProjectImage(project["project-media"])}
            alt={`An image of the project called ${project["project-name"]}`}
            className="hover: absolute top-1/4 aspect-video scale-90 transition-all group-hover:rotate-2 group-hover:scale-95"
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
        <p>
          {project["project-description"]}{" "}
          <span
            className="flex w-fit cursor-pointer flex-nowrap items-center gap-1 text-secondary"
            onClick={handleOpen}
          >
            Learn more <FaChevronRight className="text-xs" />
          </span>
        </p>
      </div>
      <ProjectModal project={project} open={open} handleClose={handleClose} />
    </>
  );
}
