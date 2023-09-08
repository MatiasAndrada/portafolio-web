import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Acerca de mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-200 text-[19px] max-w-4xl leading-[30px]"
      >
        Soy un apasionado desarrollador full-stack con enfoque en aplicaciones web y amplia experiencia en diversos lenguajes y frameworks.
        Actualmente, estoy estudiando programación en la UTN y mantengo un constante aprendizaje en nuevas tecnologías y mejores prácticas de desarrollo.
        Mi especialización en AWS para diseñar y desarrollar soluciones de software, ademas de planes de migración hacia la nube. {/* , especialmente en lo que respecta a aplicaciones a gran escala. */}
        Destaco en equipos multidisciplinarios y valoro la colaboración para lograr el éxito.
{/*         Comprometido con la excelencia y la innovación en el desarrollo de software. */}
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
/* export default About; */
