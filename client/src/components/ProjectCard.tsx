import { motion } from "framer-motion";
import React from "react";
import { ProjectCardProps } from "../types/types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDescription,
  projectImageLogo,
  tech,
  buttonText,
  link,
  id,
}) => {
  return (
    <motion.div
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      key={id}
    >
      <div className="mx-6 card glass text-base-content">
        <figure className="p-6">
          <img
            src={projectImageLogo}
            alt={projectName}
            className="rounded-lg shadow-lg"
          />
        </figure>
        <div className="max-w-sm card-body">
          <h2 className="card-title ">{projectName}</h2>
          <p>{projectDescription}</p>
          <div className="flex">
            {tech.map((tech) => (
              <div className="my-2 mr-2 badge badge-secondary">{tech} </div>
            ))}
          </div>
          <div className="card-actions">
            <a href={link}>
              <button className="rounded-full btn glass text-base-content">
                {buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
