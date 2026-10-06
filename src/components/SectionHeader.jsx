import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {
  inView,
  staggerContainer,
  textVariant,
  wordReveal
} from '../utils/motion'

// Subtítulo + título de sección. El título entra palabra por palabra,
// subiendo desde una máscara.
const SectionHeader = ({ subtitle, title, as: Heading = 'h2' }) => (
  <motion.div variants={staggerContainer(0.1)} {...inView(0.4)}>
    <motion.p variants={textVariant()} className={styles.sectionSubText}>
      {subtitle}
    </motion.p>
    <Heading className={styles.sectionHeadText}>
      {title.split(' ').map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          {index > 0 && ' '}
          <span className="inline-block align-bottom overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span variants={wordReveal} className="inline-block">
              {word}
            </motion.span>
          </span>
        </React.Fragment>
      ))}
    </Heading>
  </motion.div>
)

export default SectionHeader
