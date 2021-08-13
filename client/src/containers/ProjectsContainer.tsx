import React from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import { projects, SECTIONS } from "../data/data";

const ProjectsContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-6">
      <Heading heading={SECTIONS[2]} id="projects" />
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center md:grid-cols-1 auto-rows-fr">
        {projects.map(
          ({
            id,
            projectName,
            projectDescription,
            projectImageLogo,
            tech,
            link,
            buttonText,
          }) => (
            <ProjectCard
              id={id}
              key={id}
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
    </div>
  );
};

export default ProjectsContainer;
