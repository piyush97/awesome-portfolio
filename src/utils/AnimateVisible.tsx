import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimateVisibleProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimateVisible: React.FC<AnimateVisibleProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay, ease: "easeOut" },
        },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateVisible;
