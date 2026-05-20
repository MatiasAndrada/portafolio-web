import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Acerca de mí</h2>
      </motion.div>
      <div className="flex flex-col xl:flex-row items-center justify-evenly gap-8">
        <div className="flex-1 space-y-3 text-gray-100 leading-relaxed text-base">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="px-6 subpixel-antialiased"
          >
            Soy Desarrollador Full Stack con tres años de experiencia
            construyendo aplicaciones modernas y escalables. Mi fortaleza:
            convertir ideas complejas en arquitecturas funcionales que funcionan
            en producción.
          </motion.p>

          <motion.p
            variants={fadeIn('', '', 0.2, 1)}
            className="px-6 subpixel-antialiased"
          >
            Actualmente desarrollo{' '}
            <strong className="text-emerald-400 font-semibold">Nubotik</strong>,
            una plataforma SaaS de gestión de listas de espera que está en
            producción. Implementé
            {/* : bases de datos relacionales con Prisma, */}
            integraciones complejas (WhatsApp API, Resend, OAuth, ChatIA),
            dashboards analíticos en tiempo real y soporte en 5 idiomas.
          </motion.p>

          <motion.p
            variants={fadeIn('', '', 0.3, 1)}
            className="px-6 subpixel-antialiased"
          >
            Como Full Stack Jr en Hacela Simple, trabajo con PWA, integraciones
            de pago (mercado pago, fiserv) e infraestructura AWS. Estoy
            terminando Técnico Superior en Programación (UTN). Busco crecer a
            roles mid-level donde pueda aportar soluciones con impacto directo.
          </motion.p>
        </div>

        <motion.img
          variants={fadeIn('', '', 0.2, 1)}
          src="/me/me.jpeg"
          alt="About me"
          className="w-72 h-72 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 rounded-full flex-shrink-0"
        />
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
/* export default About; */
