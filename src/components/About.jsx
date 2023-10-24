import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Acerca de mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-slate-200 text-[19px] max-w-4xl leading-[30px]"
      >
        Soy un desarrollador web especializado en aplicaciones front-end y
        back-end, con experiencia en diversos frameworks y lenguajes de
        programación. Actualmente, estoy cursando un programa de Técnico
        Superior en Programación en la UTN para continuar ampliando mis
        habilidades. Mi enfoque se centra en la creación de soluciones
        eficientes y escalables, incluyendo planes de migración a la nube cuando
        sea necesario, y también tengo experiencia en la edición de contenido
        multimedia atractivo. Estoy preparado para aportar mis habilidades
        técnicas a equipos de desarrollo web.
        {/*         Soy un apasionado desarrollador full-stack con enfoque en aplicaciones
        web y amplia experiencia en diversos lenguajes y frameworks.
        Actualmente, estoy estudiando técnico superior en programación en la UTN
        y mantengo un constante aprendizaje en nuevas tecnologías y mejores
        prácticas de desarrollo. Mi especialización en AWS para diseñar y
        desarrollar soluciones de software, ademas de planes de migración hacia
        la nube. Valoro el trabajo en equipo. */}
        {/* , especialmente en lo que respecta a aplicaciones a gran escala. */}
        {/*         Comprometido con la excelencia y la innovación en el desarrollo de software. */}
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')
/* export default About; */
