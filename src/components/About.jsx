import React from 'react'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { fadeIn, inView, staggerContainer, zoomIn } from '../utils/motion'
import SectionHeader from './SectionHeader'

const About = () => {
  return (
    <>
      <SectionHeader subtitle="Introducción" title="Acerca de mí" />
      <div className="flex flex-col xl:flex-row items-center justify-evenly gap-8">
        <motion.div
          variants={staggerContainer(0.15)}
          {...inView(0.2)}
          className="flex-1 space-y-3 text-gray-100 leading-relaxed text-base"
        >
          {/*           <motion.p
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
            una plataforma SaaS multi-tenant de gestión de listas de esperas y
            reservas para comercios, dando soporte a chatbots con IA que mejoran
            la experiencia del cliente. La plataforma permite a los comercios
            gestionar reservas, listas de espera y comunicación con clientes de
            manera eficiente. La aplicación está en producción. Implementé
          </motion.p>

          <motion.p
            variants={fadeIn('', '', 0.3, 1)}
            className="px-6 subpixel-antialiased"
          >
            Como Full Stack Jr en Hacela Simple, trabajo con PWA, integraciones
            de pago (mercado pago, fiserv) e infraestructura AWS. Estoy
            terminando Técnico Superior en Programación (UTN). Busco crecer a
            roles mid-level donde pueda aportar soluciones con impacto directo.
          </motion.p> */}

          <motion.p
            variants={fadeIn('up', 'tween', 0, 0.8, 24)}
            className="px-6 subpixel-antialiased"
          >
            Soy Desarrollador Full Stack con 3 años de experiencia llevando
            productos a producción con React, Next.js, Node.js y PostgreSQL.
            Soy Técnico Superior en Programación (UTN) y me enfoco en el
            ownership end-to-end: del modelo de datos al deploy, convirtiendo
            ideas complejas en arquitecturas simples que funcionan.
          </motion.p>

          <motion.p
            variants={fadeIn('up', 'tween', 0, 0.8, 24)}
            className="px-6 subpixel-antialiased"
          >
            Hoy desarrollo{' '}
            <strong className="text-emerald-400 font-semibold">Nubotik</strong>,
            un SaaS multi-tenant de reservas y listas de espera que construí
            desde cero y que ya usan{' '}
            <strong className="text-emerald-400 font-semibold">
              más de 20 comercios
            </strong>
            , con un bot de IA que toma reservas por WhatsApp. Antes, en Hacela
            Simple, integré pagos con Mercado Pago y Fiserv, chat en tiempo real
            e infraestructura en AWS para un marketplace de movilidad y turismo.
          </motion.p>

          <motion.p
            variants={fadeIn('up', 'tween', 0, 0.8, 24)}
            className="px-6 subpixel-antialiased"
          >
            Estoy buscando el próximo desafío: un rol mid-level donde pueda
            seguir aportando soluciones con impacto real.
          </motion.p>
        </motion.div>

        <motion.img
          variants={zoomIn(0.2, 0.9)}
          {...inView(0.3)}
          src="/me/me3.png"
          alt="Matías Andrada"
          className="w-72 h-72 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 rounded-full flex-shrink-0"
        />
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
/* export default About; */
