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
      <div className="flex flex-col xl:flex-row items-center justify-evenly">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className=" indent-8 px-6 mt-4 subpixel-antialiased  text-slate-200 text-[19px] leading-[30px]"
        >
          Soy un desarrollador Full Stack con 3 años de experiencia, cursando la ultima materia para ser técnico superior
          en programación especializado en diferentes aplicaciones SPA's o PWA's, con renderizado
          del lado cliente o el servidor, ademas de tengo conocimientos en
          aplicaciones móviles nativas, con experiencia en diversos frameworks y
          lenguajes de programación. Junto con administración de la nube de AWS y servidores linux
          para diferentes tareas. Estoy en busca de un trabajo que me apasione y me permita aportar mis habilidades técnicas,
          para poder seguir aprendiendo y creciendo profesionalmente.
          {/* Mi enfoque se
          centra en la creación de soluciones eficientes y escalables, junto a
          la administración en la nube de AWS y las diferentes modalidades de
          migración. */}
          {/* , también tengo experiencia programas de edición de multimedia */}
          {/* Estoy preparado para aportar mis habilidades técnicas en equipos de
          desarrollo. */}
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
        <motion.img
          variants={fadeIn('', '', 0.1, 1)}
          src="/me/me.jpeg"
          alt="About me"
          className="w-72 h-72 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 mt-8 rounded-full  "
        />
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
/* export default About; */
