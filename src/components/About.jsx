import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Acerca de mí.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-200 text-[17px] max-w-3xl leading-[30px]"
      >
        Soy un apasionado del desarrollo de software y tengo experiencia en
        programación tanto en el front-end como en el back-end. Me he
        especializado en el desarrollo de aplicaciones web y he trabajado con
        varios frameworks y lenguajes de programación. También cuento con
        habilidades en edición de multimedia, lo que me permite crear contenido
        de alta calidad y atractivo. Siempre estoy buscando aprender nuevas
        herramientas y tecnologías para mejorar mis habilidades y estar
        actualizado. Soy un apasionado de trabajar en equipo y aplicar las
        mejores prácticas para lograr soluciones eficientes y escalables. Estoy
        siempre abierto a nuevas oportunidades y listo para enfrentar desafíos
        en proyectos emocionantes.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
