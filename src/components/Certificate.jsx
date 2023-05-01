import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion ';
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import eyeSVG from "../assets/certificates/eye.svg";

const CertificateCard = ({ title, image, link }) => {
  useEffect(() => {
    const elements = document.getElementsByClassName("card");
    const shadow = document.getElementsByClassName("back");
    for (let i = 0; i < elements.length; i++) {
      shadow[i].classList.add(`back--color${i}`);
    }
  });

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
              \
            </svg>
            <img src={image} alt={title} />
            <strong>{title}</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="flex items-center flex-row justify-around h-full ">
            <h3 className="front__title text-white">{title}</h3>
            <a className="front__link" href={link} target="_blank">
              <img src={eyeSVG} alt="viewCertificate" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certificate = () => {
  return (
    <>

      <motion.div variants={textVariant()} className="certificate__container">
        <p className={styles.sectionSubText}>Mis certificaciones:</p>

        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            image={certificate.image}
            link={certificate.link}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certificate, "certificate");
