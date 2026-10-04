import React from "react";
import Heading from "../components/Heading";
import TimelineCard from "../components/TimelineCard";
import { EXPERIENCE, SECTIONS } from "../data/data";

const ExperienceContainer: React.FC = () => {
  return (
    <section className="experience-programme" id="experience">
      <Heading heading={SECTIONS[1]} />
      <div className="experience-list">
        {EXPERIENCE.map(({ id, company, position, description, end, start, logo }) => (
            <TimelineCard
              key={id}
              styling=""
              num={id}
              id={id}
              logo={logo}
              start={start}
              end={end}
              position={position}
              description={description}
              company={company}
            />
        ))}
      </div>
    </section>
  );
};

export default ExperienceContainer;
