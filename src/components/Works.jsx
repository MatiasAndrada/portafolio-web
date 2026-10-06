import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { FaGithub, FaEye } from 'react-icons/fa'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, inView } from '../utils/motion'
import SectionHeader from './SectionHeader'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_demo_link
}) => {
  const optionsTilt = {
    reverse: false, // reverse the tilt direction
    max: 12, // max tilt rotation (degrees)
    perspective: 1300, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
    speed: 600, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)' // Easing on enter/exit.
  }

  return (
    // El delay depende de la columna (no del índice global) para que las
    // tarjetas de filas inferiores no esperen segundos al llegar a ellas.
    <motion.div
      variants={fadeIn('up', 'tween', (index % 3) * 0.12, 0.8)}
      {...inView(0.15)}
    >
      <Tilt
        options={optionsTilt}
        className="bg-slate-800 p-5 rounded-2xl sm:w-[350px] w-full relative group"
      >
        {/* Contenedor relativo para la tarjeta */}
        <div className="w-full h-[230px] relative group">
          {/* Imagen de la tarjeta */}
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Contenedor para los iconos */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-between opacity-0 group-hover:opacity-100 transition-opacity duration-400 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer absolute top-3 right-3 transition-transform transform translate-x-0 group-hover:translate-x-[-5px]"
            >
              <FaGithub className="w-10 h-10 hover:w-12 hover:h-12  text-white" />
            </div>
            <div
              onClick={() => window.open(source_demo_link, '_blank')}
              className="black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer absolute top-3 left-3 transition-transform transform translate-x-0 group-hover:translate-x-5"
            >
              <FaEye className="w-10 h-10 hover:w-12 hover:h-12  text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] capitalize">
            {name}
          </h3>
          <p className="mt-2 text-slate-200 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <SectionHeader subtitle="Mi trabajo" title="Proyectos" />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('up', 'tween', 0.1, 0.8, 24)}
          {...inView(0.3)}
          className="mt-3 text-slate-200 text-[17px] max-w-3xl leading-[30px]"
        >
          En mi sección de proyectos, podrás encontrar ejemplos concretos de mi
          trabajo que demuestran mis habilidades y experiencia. Cada proyecto se
          describe brevemente y se incluyen enlaces a los repositorios de código
          y demos en vivo.
          {/*           <br />
          Estos proyectos reflejan mi capacidad para resolver problemas
          complejos, trabajar con diversas tecnologías y gestionar proyectos de
          manera efectiva. */}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')
/* export default Works; */
