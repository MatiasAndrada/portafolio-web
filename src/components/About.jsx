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
        Soy un apasionado desarrollador de software full-stack con amplia experiencia en diversos lenguajes de programación y frameworks. Mi especialización se centra en el desarrollo de aplicaciones web.
        Estoy constantemente actualizándose en nuevas tecnologías y mejores prácticas, tengo conocimiento en AWS para diseñar y desarrollar soluciones de software, ademas de planes de migración hacia la nube, especialmente en lo que respecta a aplicaciones a gran escala.
        Destaco por mi capacidad para colaborar eficazmente en equipos multidisciplinarios, donde valoro la colaboración entre los miembros del equipo para lograr resultados exitosos.
        Estoy seguro de que mi pasión por la programación junto con aprendizaje continuo, me permiten enfocarme en soluciones eficientes orientándome en la excelencia para contribuir significativamente a su organización.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
