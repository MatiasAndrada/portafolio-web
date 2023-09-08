import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_g6k2aak",
        "template_yqpagk6",
        {
          from_name: form.name,
          to_name: "Matías Andrada",
          from_email: form.email,
          to_email: "matiasandrada5622@gmail.com",
          message: form.message,
        },
        "XxQbUlg6qxTiPAGqY"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Mensaje enviado con éxito, muchas gracias. Me contactaré con usted a la brevedad.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          toast.error("Hubo un error al enviar el mensaje. Intente nuevamente.");
        }
      );
  };


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >


      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  bg-opacity-60 bg-slate-900  backdrop-blur-sm p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Envíame un correo</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu nombre:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}

              className="bg-tertiary py-4 px-6 placeholder:text-slate-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Correo:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}

              className="bg-tertiary py-4 px-6 placeholder:text-slate-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensaje o consulta:</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tienes algo para decirme?"
              className="bg-tertiary py-4 px-6 placeholder:text-slate-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
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
        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
/* export default  Contact */
