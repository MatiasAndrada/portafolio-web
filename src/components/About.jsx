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
        <h2 className={styles.sectionHeadText}>Acerca de mí.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-200 text-[17px] max-w-3xl leading-[30px]"
      >
        Soy un apasionado desarrollador de software full-stack con experiencia en una amplia variedad de lenguajes de programación y frameworks. Me especializo en el desarrollo de aplicaciones web y me apasiona trabajar en equipo para crear soluciones eficientes y escalables. Además de mis habilidades en programación, también tengo experiencia en edición de multimedia, lo que me permite crear contenido de alta calidad y atractivo. Me gusta estar siempre actualizado y aprender nuevas tecnologías para mejorar mis habilidades y conocimientos. Soy una persona adaptable y me encanta enfrentar desafíos en proyectos emocionantes. Me encantaría ser parte de un equipo que valore el trabajo en equipo y aplique las mejores prácticas para crear soluciones innovadoras.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
