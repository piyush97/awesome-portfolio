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
    <motion.div transition={{ duration: 0.25 }} key={id}>
      <div
        className={`mx-6 card ${
          id % 2 === 0
            ? `bg-secondary text-secondary-content`
            : `bg-primary text-primary-content`
        }`}
      >
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
              <div
                className={`my-2 mr-2 badge ${
                  id % 2 === 0
                    ? `text-primary-content badge-primary`
                    : `text-secondary-content badge-secondary`
                }`}
              >
                {tech}{" "}
              </div>
            ))}
          </div>
          <div className="card-actions">
            <a href={link}>
              <button
                className={`rounded-full btn ${
                  id % 2 === 0
                    ? `text-primary-content btn-primary`
                    : `text-secondary-content btn-secondary`
                }`}
              >
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
