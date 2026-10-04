import React from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import { projects, SECTIONS } from "../data/data";

const ProjectsContainer: React.FC = () => {
  return (
    <section className="work-collection" id="projects">
      <Heading heading={SECTIONS[2]} />
      <div className="work-list">
        {projects.map(
          ({ id, projectName, projectDescription, projectImageLogo, tech, link, buttonText }) => (
              <ProjectCard
                key={id}
                id={id}
                projectDescription={projectDescription}
                projectImageLogo={projectImageLogo}
                projectName={projectName}
                tech={tech}
                link={link}
                buttonText={buttonText}
              />
          )
        )}
      </div>
    </section>
  );
};

export default ProjectsContainer;
