import React from "react";
import Heading from "../components/Heading";
import TimelineCard from "../components/TimelineCard";
import { EXPERIENCE, SECTIONS } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const ExperienceContainer: React.FC = () => {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto lg:px-16" id="experience">
      <AnimateVisible>
        <Heading heading={SECTIONS[1]} />
      </AnimateVisible>
      <div className="max-w-2xl">
        {EXPERIENCE.map(({ id, company, position, description, end, start, logo }, i) => (
          <AnimateVisible key={id} delay={i * 0.1}>
            <TimelineCard
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
          </AnimateVisible>
        ))}
      </div>
    </section>
  );
};

export default ExperienceContainer;
