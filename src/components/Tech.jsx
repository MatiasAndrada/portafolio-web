import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { View, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { BallView } from './canvas/Ball'
import { SectionWrapper } from '../hoc'
import { technologies, skills } from '../constants'

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tecnologías trabajadas</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 text-center">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center" key={technology.name}>
            <BallView
              icon={technology.icon}
              isMobile={isMobile}
              className="w-28 h-28"
            />
            <span className="text-white text-[16px] font-semibold capitalize select-none">
              {technology.name}
            </span>
          </div>
        ))}
      </div>

      {sharedCanvas}

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
    </div>
  )
}

export default SectionWrapper(Tech, 'skills')
