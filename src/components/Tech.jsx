import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { View, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { easings, fadeIn, inView, textVariant } from '../utils/motion'
import { BallView } from './canvas/Ball'
import { SectionWrapper } from '../hoc'
import { technologies, skills } from '../constants'
import SectionHeader from './SectionHeader'

// Cada chip entra con un pequeño retraso según su posición dentro de la card.
const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easings.out, delay: 0.25 + i * 0.04 }
  })
}

const Tech = () => {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 500)
    setMounted(true)
  }, [])

  const sharedCanvas = mounted
    ? createPortal(
        <Canvas
          eventSource={containerRef}
          dpr={[1, isMobile ? 1 : 2]}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          {!isMobile && (
            <>
              <ambientLight intensity={4} />
            </>
          )}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 2 - Math.PI / 18}
            maxPolarAngle={Math.PI / 2 + Math.PI / 18}
            enableDamping
            dampingFactor={0.05}
            target={[0, 0, 0]}
          />
          <View.Port />
        </Canvas>,
        document.body
      )
    : null

  return (
    <div ref={containerRef}>
      <SectionHeader subtitle="Tecnologías trabajadas" title="Skills" />
      <div className="flex flex-row flex-wrap justify-center gap-10 text-center">
        {technologies.map((technology, index) => (
          // Solo se anima y/opacidad: el canvas 3D sigue al rect del <View>,
          // así que la bola se mueve junto con el contenedor.
          <motion.div
            className="flex flex-col items-center"
            key={technology.name}
            variants={fadeIn('up', 'tween', (index % 6) * 0.06, 0.7, 24)}
            {...inView(0.4)}
          >
            <BallView
              icon={technology.icon}
              isMobile={isMobile}
              className="w-28 h-28"
            />
            <span className="text-white text-[16px] font-semibold capitalize select-none">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>

      {sharedCanvas}

      <div className="flex flex-row flex-wrap justify-center  gap-10 mt-32">
        <motion.p
          variants={textVariant()}
          {...inView(0.5)}
          className={`${styles.sectionSubText} mt-12 `}
        >
          Otros conocimientos:
        </motion.p>
        {skills.map((skill, index) => (
          <motion.div
            className=" overflow-hidden bg-opacity-60 bg-gray-900  backdrop-blur-sm p-4 rounded-lg shadow-lg w-fit max-w-4xl"
            key={index}
            variants={fadeIn('up', 'tween', (index % 3) * 0.1, 0.8, 32)}
            {...inView(0.2)}
          >
            <div className="px-6 py-4">
              <div className="font-semibold text-xl text-emerald-400 mb-2 uppercase">
                {skill.title}
              </div>
              <ul className="flex flex-row flex-wrap gap-3   mt-2 ">
                {skill.items.map((skill, index) => (
                  <motion.li
                    className="place-self-center"
                    key={index}
                    custom={index}
                    variants={chip}
                  >
                    <span className="inline-block bg-sky-700 rounded-full px-3 py-1 text-sm  text-white mr- mb-1 capitalize select-none">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Monta el canvas 3D solo cuando la sección se acerca al viewport.
export default SectionWrapper(Tech, 'skills', { deferMount: true })
