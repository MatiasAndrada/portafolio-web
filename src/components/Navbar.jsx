import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import { easings } from '../utils/motion'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 800) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easings.out, delay: 0.1 }}
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? 'bg-emerald-700' : 'bg-transparent'
      }`}
    >
      <div className="navbar w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-12 sm:gap-6"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          {/*ALAS*/}
          {/*           <div className="w-10 sm:w-32"> 
            <motion.h1
              initial={{ opacity: 0 }} // Estado inicial con opacidad 0
              animate={{ opacity: 1 }} // Estado final con opacidad 1
              transition={{ delay: 0.4 }} // Retraso de
              className="navbar__right text-white sm:text-5xl text-3xl"
              id="alas"
            >
              ()
            </motion.h1>
          </div> */}
          <div className="text-white text-[18px] font-bold cursor-pointer flex">
            <AnimatePresence initial={false}>
              {scrolled && (
                <motion.span
                  key="brand-name"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.35, ease: easings.out }}
                  className="overflow-hidden whitespace-pre"
                >
                  Matías{' '}
                </motion.span>
              )}
            </AnimatePresence>
            <p>| Portafolio</p>
          </div>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-secondary' : 'text-white'
              } relative hover:text-secondary transition-colors duration-300 text-[18px] font-medium cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 hover:after:scale-x-100`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {active === nav.title && (
                <motion.span
                  layoutId="nav-underline"
                  transition={{ duration: 0.4, ease: easings.out }}
                  className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-secondary"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            whileTap={{ scale: 0.85 }}
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -8 }}
                transition={{ duration: 0.2, ease: easings.out }}
                style={{ transformOrigin: 'top right' }}
                className="flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: easings.out,
                        delay: 0.05 + index * 0.05
                      }}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? 'text-white' : 'text-secondary'
                      }`}
                      onClick={() => {
                        setToggle(!toggle)
                        setActive(nav.title)
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
