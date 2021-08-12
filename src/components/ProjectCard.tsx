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
      // animate={num % 2 === 0 ? { x: [100 + num, 0] } : { x: [100 + num, 0] }}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      key={id}
    >
      <div className="mx-6 card glass text-neutral-content text-base-content">
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
              <button className="rounded-full btn glass">{buttonText}</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
