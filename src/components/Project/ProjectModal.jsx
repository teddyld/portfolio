import React from "react";
import GitHub from "../Links/GitHub";
import External from "../Links/External";
import PortfolioImage from "../../assets/portfolio.png";
import OcclusionImage from "../../assets/occlusion.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function ProjectModal({ project, open, handleClose }) {
  // TODO: Modify this function to parse video instead of image
  const parseProjectVideo = (image) => {
    switch (image) {
      case "portfolio":
        return PortfolioImage;
      case "occlusion":
        return OcclusionImage;
      default:
        break;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="no-scrollbar fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll p-8 backdrop-blur"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.2,
            }}
            className="bg-background-dark h-fit w-full max-w-2xl cursor-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="w-full"
              src={parseProjectVideo(project["project-media"])}
            />
            <div className="flex flex-col gap-4 p-8">
              <span>
                <h1 className="text-3xl font-bold">
                  {project["project-name"]}
                </h1>
                <div className="text-secondary">
                  {project["project-tools"].join(" - ")}
                </div>
              </span>
              {project["project-detailed-description"].map((paragraph, i) => (
                <p key={`paragraph-${i}`}>{paragraph}</p>
              ))}
              <h2 className="mt-2 text-xl font-medium">
                Project Links<span className="text-secondary">.</span>
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <GitHub to={project["project-link"]} display={true} />
                {project["project-external"] && (
                  <External to={project["project-external"]} display={true} />
                )}
              </div>
            </div>
          </motion.div>
          <div className="absolute right-12 top-12 text-3xl">
            <IoClose />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
