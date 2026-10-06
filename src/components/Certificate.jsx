import React, { useEffect } from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, inView, staggerContainer, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { certificates } from '../constants'
// react-icons eye
import { FaEye } from 'react-icons/fa'

const CertificateCard = ({ title, image, link, cod }) => {
  useEffect(() => {
    const elements = document.getElementsByClassName('card')
    const shadow = document.getElementsByClassName('back')
    for (let i = 0; i < elements.length; i++) {
      shadow[i].classList.add(`back--color${i}`)
    }
  })

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <svg
              stroke="#ffffff"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50px"
              width="50px"
              fill="#ffffff"
            >
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
            </svg>
            <img
              src={image}
              alt={title}
              width={'120px'}
              height={'120px'}
              loading="lazy"
              decoding="async"
            />
            <strong className="text-center">{title}</strong>
          </div>
        </div>
        <div className="front">
          {/*           <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div> */}
          <div className="flex items-center flex-col justify-center gap-2 h-full ">
            <h3 className="front__title">{title}</h3>
            <h4 className="front__cod"> {cod}</h4>
            <a
              className="front__link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <FaEye className="front__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Certificate = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer(0.12)}
        {...inView(0.1)}
        className="certificate__container"
      >
        <motion.p variants={textVariant()} className={styles.sectionSubText}>
          Certificaciones:
        </motion.p>

        {certificates.map((certificate, index) => (
          <motion.div key={index} variants={fadeIn('up', 'tween', 0, 0.7)}>
            <CertificateCard
              title={certificate.title}
              image={certificate.image}
              link={certificate.link}
              cod={certificate.cod}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Certificate, 'certificate')
/* export default Certificate; */
