import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
// Debe ir después del CSS de la librería: pisa sus keyframes de entrada.
import '../styles/sections/Experience.scss'

import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, inView, staggerContainer } from '../utils/motion'
import SectionHeader from './SectionHeader'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#232631',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold capitalize">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <motion.ul
        variants={staggerContainer(0.08, 0.2)}
        {...inView(0.1)}
        className="mt-5 list-disc ml-5 space-y-2"
      >
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            variants={fadeIn('up', 'tween', 0, 0.6, 12)}
            className="text-slate-200 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <SectionHeader
        subtitle="Lo que he hecho hasta ahora"
        title="Mi experiencia laboral"
      />

      <div className="mt-20 flex flex-col h-100">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
/* export default Experience; */
