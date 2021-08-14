import { motion } from "framer-motion";
import React from "react";
import { TimelineCardProps } from "../types/types";

const TimelineCard: React.FC<TimelineCardProps> = ({
  key,
  num,
  company,
  end,
  start,
  description,
  position,
  logo,
  styling,
}) => {
  return (
    <div
      className={`flex items-center justify-between w-full mb-8  ${styling}`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white">{num}</h1>
      </div>
      <motion.div
        transition={{ duration: 0.25 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={
          num % 2 === 0
            ? "order-1 w-5/12 shadow-2xl card lg:card-side bg-primary text-primary-content"
            : "order-1 w-5/12 shadow-2xl card lg:card-side bg-secondary text-secondary-content"
        }
      >
        <div className="card-body">
          <img src={logo} alt={company} className="w-20" />
          <span className="py-0 font-bold card-subtitle font-xs card-side">
            {position}
          </span>
          <span className="font-light font-xs">
            {start} - {end}
          </span>
          <p className="font-light card-side">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;
