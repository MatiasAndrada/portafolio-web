import  React from "react";
import Tilt from "react-tilty";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaGithub } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) =>
{
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-slate-800 p-5 rounded-2xl sm:w-[350px] w-full"
      >
        <div className="relative w-full h-[230px">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
       <FaGithub className="w-1/2 h-1/2 object-contain text-white" />

            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] capitalize">{name}</h3>
          <p className="mt-2 text-slate-200 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-slate-200 text-[17px] max-w-3xl leading-[30px]"
        >
          En mi sección de proyectos, podrás encontrar ejemplos concretos de mi
          trabajo que demuestran mis habilidades y experiencia. Cada proyecto se
          describe brevemente y se incluyen enlaces a los repositorios de código
          y demos en vivo.
          <br />
          Estos proyectos reflejan mi capacidad para resolver problemas
          complejos, trabajar con diversas tecnologías y gestionar proyectos de
          manera efectiva.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">

        { 
        projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
