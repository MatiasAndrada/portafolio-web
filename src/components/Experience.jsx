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
      {/* Se usan <div> en lugar de <p>: la librería del timeline pisa márgenes
          y tamaños de los <p>. */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <div className="text-secondary text-[16px] font-semibold">
          {experience.link ? (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {experience.company_name}
            </a>
          ) : (
            experience.company_name
          )}
          {experience.role_note && (
            <span className="text-slate-400 font-medium">
              {' '}
              · {experience.role_note}
            </span>
          )}
        </div>
        {experience.summary && (
          <div className="mt-3 text-slate-300 text-[15px] leading-relaxed">
            {experience.summary}
          </div>
        )}
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

      {experience.stack && (
        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`Stack en ${experience.company_name}`}
        >
          {experience.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-sky-900/70 px-3 py-1 text-xs font-medium text-sky-100"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
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

      <div className="mt-20 flex flex-col">
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
