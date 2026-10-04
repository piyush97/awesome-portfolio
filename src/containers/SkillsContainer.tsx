import React from "react";
import Heading from "../components/Heading";
import { SECTIONS, SKILLS_GROUPED } from "../data/data";

const SkillsContainer: React.FC = () => {
  return (
    <section className="skills-programme" id="skills">
      <Heading heading={SECTIONS[3]} />
      <div className="skills-list">
        {SKILLS_GROUPED.map(({ category, skills }) => (
            <div className="skill-group" key={category}>
              <h3>
                {category}
              </h3>
              <div className="skill-words" role="list" aria-label={`${category} skills`}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;
