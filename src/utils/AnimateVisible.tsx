import { motion } from "framer-motion";
import React from "react";

interface AnimateVisibleProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimateVisible: React.FC<AnimateVisibleProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default AnimateVisible;
