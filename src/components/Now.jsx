import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, inView, staggerContainer } from '../utils/motion'
import { now } from '../constants'
import SectionHeader from './SectionHeader'

const Now = () => {
  return (
    <>
      <SectionHeader subtitle="Lo que estoy haciendo" title="Actualmente" />
      <div className="now__content">
        <motion.ul
          variants={staggerContainer(0.15)}
          {...inView(0.3)}
          className="now__content__text__list list-disc"
        >
          {now.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeIn('up', 'tween', 0, 0.7, 20)}
              className="now__content__text__list__item m-1 text-white 32px "
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  )
}

export default SectionWrapper(Now, 'now')
/* export default Now; */
