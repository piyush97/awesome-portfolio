import React from "react";
import { ReactComponent as Illustration } from "../assets/skills.svg";
import Heading from "../components/Heading";
import { SECTIONS, skills } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const SkillsContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-6 ">
      <Heading
        heading={SECTIONS[3]}
        id="skills"
        illustration={<Illustration className=" max-h-48" />}
      />
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center auto-rows-fr">
        {skills.map(({ id, skill, level }) => (
          <AnimateVisible key={id}>
            <div
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
          </AnimateVisible>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
