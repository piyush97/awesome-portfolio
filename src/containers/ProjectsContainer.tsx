import React from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import { projects, SECTIONS } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const ProjectsContainer: React.FC = () => {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto lg:px-16" id="projects">
      <AnimateVisible>
        <Heading heading={SECTIONS[2]} />
      </AnimateVisible>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({ id, projectName, projectDescription, projectImageLogo, tech, link, buttonText }, i) => (
            <AnimateVisible key={id} delay={i * 0.1}>
              <ProjectCard
                id={id}
                projectDescription={projectDescription}
                projectImageLogo={projectImageLogo}
                projectName={projectName}
                tech={tech}
                link={link}
                buttonText={buttonText}
              />
            </AnimateVisible>
          )
        )}
      </div>
    </section>
  );
};

export default ProjectsContainer;
