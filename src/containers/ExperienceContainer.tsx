import React from "react";
import { ReactComponent as Illustration } from "../assets/experience.svg";
import Heading from "../components/Heading";
import TimelineCard from "../components/TimelineCard";
import { EXPERIENCE, SECTIONS } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const ExperienceContainer: React.FC = () => {
  return (
    <div className="mx-3 lg:mx-12">
      <Heading
        heading={SECTIONS[1]}
        id="experience"
        illustration={<Illustration className=" max-h-48" />}
      />
      <div className="relative h-full p-10 overflow-hidden wrap">
        <div className="absolute h-full border border-accent border-2-2 border-opacity-20 left-1/2 "></div>

        {EXPERIENCE.map(
          ({ key, company, position, description, end, start, logo }) => (
            <AnimateVisible key={key}>
              {key % 2 === 0 ? (
                <>
                  <TimelineCard
                    styling="right-timeline"
                    key={key}
                    num={key}
                    logo={logo}
                    start={start}
                    end={end}
                    position={position}
                    description={description}
                    company={company}
                  />
                </>
              ) : (
                <TimelineCard
                  styling="flex-row-reverse  left-timeline"
                  key={key}
                  logo={logo}
                  num={key}
                  start={start}
                  end={end}
                  position={position}
                  description={description}
                  company={company}
                />
              )}
            </AnimateVisible>
          )
        )}
        {/* <div className="absolute h-full border border-accent border-2-2 border-opacity-20 left-1/2 "></div>
        <div className="flex items-center justify-between w-full mb-8 right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
          </div>
          <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-neutral">
            <h3 className="mb-3 text-xl font-bold text-neutral-content">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-opacity-100 text-neutral-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mb-8 right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
          </div>
          <div className="order-1 w-5/12 px-6 py-4 bg-gray-400 rounded-lg shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-800">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
          </div>
          <div className="order-1 w-5/12 px-6 py-4 bg-red-400 rounded-lg shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ExperienceContainer;
