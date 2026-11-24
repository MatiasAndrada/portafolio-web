import React, { useRef } from 'react'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from 'framer-motion'
import { easings } from '../utils/motion'
import { CV_URL } from '../constants'

// Línea de tiempo de entrada (segundos desde que carga la página):
// punto/línea 0.1 → nombre 0.3 → roles 0.9 → CTAs 1.2 → iconos 1.4 → scroll 1.9
const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }
  }
}

const lineVariant = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 1.1, ease: easings.out, delay: 0.25 }
  }
}

const nameWord = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: easings.out, delay: 0.3 + i * 0.14 }
  })
}

const roleLine = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.out, delay: 0.9 + i * 0.15 }
  })
}

const socialIcon = {
  hidden: { opacity: 0, scale: 0.4 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 16,
      delay: 1.4 + i * 0.12
    }
  })
}

const scrollCue = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.out, delay: 1.9 }
  }
}

const NAME_WORDS = ['Matías', 'Andrada']

const Hero = () => {
  // Al scrollear, el contenido se desvanece y baja más lento que la página.
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section ref={sectionRef} className="relative w-full h-screen mx-auto">
      <motion.div
        initial="hidden"
        animate="show"
        style={
          reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
        }
        className=" absolute inset-0 bottom-[100px] max-w-7xl mx-auto px-5 flex flex-row items-center gap-5"
      >
        <div className="flex flex-col justify-center items-center mt-5 sm:mt-0 sm:flex">
          <motion.div
            variants={dotVariant}
            className="w-5 h-5 rounded-full bg-[#0052CC] hidden sm:block"
          />
          <motion.div
            variants={lineVariant}
            style={{ originY: 0 }}
            className="w-1 h-48 bg-gradient-to-b from-[#0052CC] to-[#00D4FF] hidden sm:block"
          />
        </div>

        <div className="flex flex-col justify-start ">
          <h1 className="name">
            {NAME_WORDS.map((word, index) => (
              <React.Fragment key={word}>
                {index > 0 && ' '}
                {/* `* { font-family }` en main.scss pisa la herencia: hay que
                    forzarla para que las palabras usen la tipografía de .name. */}
                <motion.span
                  custom={index}
                  variants={nameWord}
                  className="inline-block [font-family:inherit]"
                >
                  {word}
                </motion.span>
              </React.Fragment>
            ))}
          </h1>
          {/* En mobile los íconos bajan debajo de los roles para no
              comprimirlos. */}
          <div className="flex flex-col items-start sm:flex-row sm:items-center subtitle">
            <div>
              {/* Mismo titular que el CV. */}
              <motion.h3 custom={0} variants={roleLine} className="role mr-6 ">
                Técnico superior en Programación · Full Stack Developer
              </motion.h3>
              <motion.h3 custom={1} variants={roleLine} className="role mr-6 ">
                React · Next.js · Node.js · TypeScript
              </motion.h3>
              {/*               <h3 className="role mr-6 ">
                Creador de Nubotik, SaaS en producción.
              </h3> */}
            </div>
            <div className="iconContainer -ml-5 sm:ml-0">
              <motion.a
                custom={0}
                variants={socialIcon}
                href="https://github.com/MatiasAndrada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="icon" />
              </motion.a>
              <motion.a
                custom={1}
                variants={socialIcon}
                href="https://www.linkedin.com/in/matias-andrada-810900217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="icon" />
              </motion.a>
            </div>
          </div>
          <motion.div
            custom={2}
            variants={roleLine}
            className="mt-4 sm:mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={CV_URL}
              download="Matias_Andrada_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[#0052CC] px-6 py-3 font-semibold text-white shadow-lg shadow-[#0052CC]/30 transition-colors hover:bg-[#0062F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <FaDownload aria-hidden="true" />
              Descargar CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border-2 border-secondary px-6 py-[10px] font-semibold text-white transition-colors hover:bg-secondary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Contactame
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { opacity: cueOpacity }}
        className="absolute bottom-10 w-full hidden xs:flex justify-center items-center"
      >
        <motion.a
          href="#about"
          aria-label="Ir a la sección Acerca de mí"
          variants={scrollCue}
          initial="hidden"
          animate="show"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
