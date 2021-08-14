import React from "react";
import Heading from "../components/Heading";
import { SECTIONS, skills } from "../data/data";

const SkillsContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-6 ">
      <Heading heading={SECTIONS[3]} id="skills" />
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center auto-rows-fr">
        {skills.map(({ id, skill, level }) => (
          <div
            key={id}
            className={`p-6 space-y-2 artboard phone card ${
              id % 2 === 0
                ? `bg-secondary text-secondary-content`
                : `bg-primary text-primary-content`
            }`}
          >
            <h3>{skill}</h3>
            <progress
              className={`progress ${
                id % 2 === 0 ? `progress-primary` : `progress-secondary`
              }`}
              value={level}
              max="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
