import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies, skills } from '../constants'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tecnologías trabajadas</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10  text-center">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <span className="text-white text-[16px] font-semibold capitalize select-none">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center  gap-10 mt-32">
        <p className={`${styles.sectionSubText} mt-12 `}>
          Otros conocimientos:
        </p>
        {skills.map((skill, index) => (
          <div
            className=" overflow-hidden bg-opacity-60 bg-gray-900  backdrop-blur-sm p-4 rounded-lg shadow-lg w-fit max-w-4xl"
            key={index}
          >
            <div className="px-6 py-4">
              <div className="font-semibold text-xl text-emerald-400 mb-2 uppercase">
                {skill.title}
              </div>
              <ul className="flex flex-row flex-wrap gap-3   mt-2 ">
                {skill.items.map((skill, index) => (
                  <li className="place-self-center" key={index}>
                    <span className="inline-block bg-sky-700 rounded-full px-3 py-1 text-sm  text-white mr- mb-1 capitalize select-none">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'skills')
/* export default Tech; */
