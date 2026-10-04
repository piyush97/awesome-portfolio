import React from "react";
import { TimelineCardProps } from "../types/types";

const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  end,
  start,
  description,
  position,
  logo,
}) => {
  const startYear = new Date(start).getUTCFullYear();
  const endYear = end === "Present" ? "Present" : new Date(end).getUTCFullYear();

  return (
    <div className="experience-item">
      <span className="experience-date">
        {startYear} — {endYear}
      </span>

      {/* Card */}
      <article>
        <div className="experience-company">
          <img
            src={logo}
            alt={`${company} logo`}
            className="company-logo"
            loading="lazy"
            width="40"
            height="40"
          />
          <div>
            <h3>{company}</h3>
            <p>{position}</p>
          </div>
        </div>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default TimelineCard;
