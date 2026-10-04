import React, { useState } from "react";
import { ArrowUpRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { ABOUT, IS_DEMO, NAME, projects, SOCIAL_LINKS, TECH_STRIP } from "../data/data";
import { HeroProps } from "../types/types";

const Hero: React.FC<HeroProps> = ({ greetingText, greetingDescription, buttonText }) => {
  const [selectedId, setSelectedId] = useState(projects[0]?.id);
  const [changed, setChanged] = useState(false);
  const project = projects.find(({ id }) => id === selectedId) ?? projects[0];

  return (
    <section className="demonstration" id="home" aria-label="Featured work">
      {project ? (
        <>
          <div className="project-programme" role="group" aria-label="Choose a featured project">
            {projects.map(({ id, projectName }) => (
              <button
                key={id}
                type="button"
                aria-pressed={project.id === id}
                onClick={() => { setSelectedId(id); setChanged(true); }}
              >
                {projectName}
              </button>
            ))}
          </div>
          <div className="projection">
            <img
              key={project.id}
              src={project.projectImageLogo}
              alt={`${project.projectName} demo preview`}
              className={changed ? "projection-image projection-change" : "projection-image"}
              width="1200"
              height="818"
              fetchPriority="high"
            />
          </div>
          <div className="project-caption">
            <div>
              <h2>{project.projectName}</h2>
              <p>{project.tech.join(" / ")}</p>
              {IS_DEMO && <p className="demo-notice">Template demo. Projects, experience and metrics are sample content.</p>}
            </div>
            <a className="project-action" href={project.link} target="_blank" rel="noopener noreferrer">
              {project.buttonText} <ArrowUpRightIcon aria-hidden="true" />
            </a>
          </div>
        </>
      ) : (
        <div className="project-caption">
          <h2>{NAME}'s work</h2>
          <p>Projects will appear here when added to the portfolio data.</p>
        </div>
      )}
      <div className="introduction">
        <div>
          <p className="availability">{greetingText}</p>
          <p>{greetingDescription}</p>
          <p>{ABOUT}</p>
          <p className="technology-line">{TECH_STRIP.join(" / ")}</p>
        </div>
        <div className="intro-actions">
          <a href="#experience">{buttonText} <ArrowDownIcon aria-hidden="true" /></a>
          <a href={SOCIAL_LINKS.email}>Contact Me <ArrowUpRightIcon aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
