import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ProjectCardProps } from "../types/types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDescription,
  projectImageLogo,
  tech,
  buttonText,
  link,
}) => {
  return (
    <article className="work-item">
      {/* Image */}
      <div className="work-image">
        <img
          src={projectImageLogo}
          alt={`${projectName} demo preview`}
          loading="lazy"
          width="600"
          height="314"
        />
      </div>

      <div className="work-description">
        {/* Tech tags */}
        <div className="technology-line" aria-label="Technologies used">
          {tech.map((t) => (
            <span
              key={t}
            >
              {t}
            </span>
          ))}
        </div>

        <h3>{projectName}</h3>
        <p>
          {projectDescription}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="work-link"
          aria-label={`${buttonText} - ${projectName}`}
        >
          {buttonText}
          <ArrowUpRightIcon aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
