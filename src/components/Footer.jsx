import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
      {/*       <p className="footerText">&copy; 2023 Matías Andrada</p> */}
    </motion.footer>
  )
}

/* export default SectionWrapper(Footer, "footer"); */
export default Footer
