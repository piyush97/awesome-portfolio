import React from "react";
import Heading from "../components/Heading";
import { SECTIONS, SKILLS_GROUPED } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const SkillsContainer: React.FC = () => {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto lg:px-16" id="skills">
      <AnimateVisible>
        <Heading heading={SECTIONS[3]} />
      </AnimateVisible>
      <div className="grid gap-8 md:grid-cols-2">
        {SKILLS_GROUPED.map(({ category, icon, skills }, i) => (
          <AnimateVisible key={category} delay={i * 0.1}>
            <div className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:border-primary hover:border-opacity-40 transition-colors">
              <h3 className="font-bold text-base-content mb-4 flex items-center gap-2 text-lg">
                <span aria-hidden="true">{icon}</span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category} skills`}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-base-100 text-base-content border border-base-300 hover:border-primary hover:text-primary transition-colors cursor-default"
                    role="listitem"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateVisible>
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;
