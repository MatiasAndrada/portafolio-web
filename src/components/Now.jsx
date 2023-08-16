import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { now } from "../constants";

const Now = () => {

  return (
    <>
      <motion.div variants={textVariant()} className="now__container">
        <p className={styles.sectionSubText}>Lo que estoy haciendo</p>
        <h2 className={styles.sectionHeadText}>Actualmente</h2>
      </motion.div>
      <motion.div variants={fadeIn()} className="now__content">

        <ul className="now__content__text__list list-disc">
          {now.map((item, index) => (
            <li key={index} className="now__content__text__list__item m-1 text-white 32px capitalize">
              {item.title}.
            </li>
          ))}
        </ul>

      </motion.div>

    </>
  );
};

export default SectionWrapper(Now, "now");
