import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { fadeIn, inView, slideIn, staggerContainer } from '../utils/motion'
import SectionHeader from './SectionHeader'

const field =
  'bg-tertiary py-4 px-6 placeholder:text-slate-200 text-white rounded-lg outline-none border-none font-medium transition-shadow duration-300 focus:ring-2 focus:ring-secondary'
const fieldReveal = fadeIn('up', 'tween', 0, 0.6, 20)

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('Por favor, complete todos los campos.')
      return
    }

    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Matías Andrada',
          from_email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          toast.success(
            'Mensaje enviado con éxito, muchas gracias. Me contactaré con usted a la brevedad.'
          )

          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          toast.error('Hubo un error al enviar el mensaje. Intente nuevamente.')
        }
      )
  }

  return (
    <div
      className={
        'xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
      }
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        {...inView(0.1)}
        className="flex-[0.75]  bg-opacity-60 bg-slate-900  backdrop-blur-sm p-8 rounded-2xl"
      >
        <SectionHeader subtitle="Envíame un correo" title="Contacto" as="h3" />

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={staggerContainer(0.1, 0.35)}
          className="mt-12 flex flex-col gap-8"
        >
          <motion.label variants={fieldReveal} className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu nombre:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={field}
            />
          </motion.label>
          <motion.label variants={fieldReveal} className="flex flex-col">
            <span className="text-white font-medium mb-4">Correo:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={field}
            />
          </motion.label>
          <motion.label variants={fieldReveal} className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Mensaje o consulta:
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tienes algo para decirme?"
              className={field}
            />
          </motion.label>

          <motion.button
            type="submit"
            variants={fieldReveal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </motion.button>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </motion.form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        {...inView(0.1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

// Monta el canvas 3D (Earth) solo cuando la sección se acerca al viewport.
export default SectionWrapper(Contact, 'contact', { deferMount: true })
/* export default  Contact */
