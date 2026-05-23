import { motion } from "framer-motion";
import React from "react";
import { TimelineCardProps } from "../types/types";

const TimelineCard: React.FC<TimelineCardProps> = ({
  num,
  company,
  end,
  start,
  description,
  position,
  logo,
}) => {
  const startYear = new Date(start).getFullYear();
  const endYear = end === "Present" ? "Present" : new Date(end).getFullYear();

  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="relative pl-8 pb-10 border-l-2 border-base-300 last:border-transparent last:pb-0"
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-2 border-base-100"
        aria-hidden="true"
      />

      {/* Date badge */}
      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary bg-opacity-10 text-primary mb-3">
        {startYear} — {endYear}
      </span>

      {/* Card */}
      <article className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:border-primary hover:border-opacity-40 transition-colors">
        <div className="flex items-start gap-4 mb-3">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-10 h-10 object-contain rounded-lg bg-white p-1 flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-base-content text-lg leading-tight">{company}</h3>
            <p className="text-primary font-medium text-sm">{position}</p>
          </div>
        </div>
        <p className="text-base-content opacity-60 text-sm leading-relaxed">{description}</p>
      </article>
    </motion.div>
  );
};

export default TimelineCard;
