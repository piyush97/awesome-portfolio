import { motion } from "framer-motion";
import React from "react";
import { ProjectCardProps } from "../types/types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  projectName,
  projectDescription,
  projectImageLogo,
  tech,
  buttonText,
  link,
}) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:border-primary hover:border-opacity-40 transition-colors flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={projectImageLogo}
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-base-200 to-transparent opacity-60"
          aria-hidden="true"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-3" aria-label="Technologies used">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-base-content mb-2">{projectName}</h3>
        <p className="text-base-content opacity-60 text-sm leading-relaxed flex-1 mb-4">
          {projectDescription}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          aria-label={`${buttonText} - ${projectName}`}
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
