import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const SectionWrapper = (Component, idName) => {
  return function WrappedComponent() {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }, // Adjust the threshold as needed
      );

      const target = document.getElementById(idName);
      if (target) {
        observer.observe(target);
      }

      return () => {
        if (target) {
          observer.unobserve(target);
        }
      };
    }, [idName]);

    return (
      <motion.section
        variants={staggerContainer()}
        initial={shouldRender ? "show" : "hidden"}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {shouldRender && <Component />}
      </motion.section>
    );
  };
};

export default SectionWrapper;
