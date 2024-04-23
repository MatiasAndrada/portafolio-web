import React, { useEffect } from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { certificates } from '../constants'
// react-icons eye
import { FaEye } from 'react-icons/fa'

const CertificateCard = ({ title, image, link, cod }) => {
  useEffect(() => {
    const elements = document.getElementsByClassName('card')
    const shadow = document.getElementsByClassName('back')
    console.log('🦇  useEffect  elements.length:', elements.length)
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
            <img src={image} alt={title} width={'120px'} height={'120px'} />
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
      <motion.div variants={textVariant()} className="certificate__container">
        <p className={styles.sectionSubText}>Certificaciones:</p>

        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            image={certificate.image}
            link={certificate.link}
            cod={certificate.cod}
          />
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Certificate, 'certificate')
/* export default Certificate; */
