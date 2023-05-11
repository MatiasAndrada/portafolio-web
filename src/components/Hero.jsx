import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarsCanvas } from "./canvas";


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  


  return (
    <section className="relative w-full h-screen mx-auto">
      {!isMobile && (
        <div className="absolute inset-0">
          <StarsCanvas />
        </div>
      )}

      <div className="absolute inset-0 bottom-[100px] max-w-7xl mx-auto px-5 flex flex-row items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center items-center mt-5 sm:mt-0 sm:flex">
            <div className="w-5 h-5 rounded-full bg-[#2820bd] hidden sm:block" />
            <div className="w-1 h-40 bg-gradient-to-b from-[#2820bd] to-[#f272c8] hidden sm:block" />
          </div>
        </motion.div>

        <div className="flex flex-col justify-start ">
          <h1 className="name">Matías Andrada.</h1>
          <h3 className="role ">Desarrollador Full Stack Junior.</h3>

        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
