import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { easings } from '../utils/motion'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: easings.out }}
      className="footer"
    >
      <div className="footerContent">
        <div className="iconContainer">
          <a
            href="https://github.com/MatiasAndrada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="iconContainer">
          <a
            href="https://www.linkedin.com/in/matias-andrada-810900217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
      <p className="footerText">&copy; {year} Matías Andrada</p>
      <p className="footerCredit">
        Modelo 3D{' '}
        <a
          href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
          target="_blank"
          rel="noopener noreferrer"
        >
          “Stylized planet”
        </a>{' '}
        por{' '}
        <a
          href="https://sketchfab.com/cmzw"
          target="_blank"
          rel="noopener noreferrer"
        >
          cmzw
        </a>
        , licencia{' '}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY 4.0
        </a>
      </p>
    </motion.footer>
  )
}

/* export default SectionWrapper(Footer, "footer"); */
export default Footer
