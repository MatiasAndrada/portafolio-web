import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const variants = {
    left: { x: 0 },
    right: { x: 20 }
  }
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
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-200 ${
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
          <motion.div
            className="text-white text-[18px] font-bold cursor-pointer flex"
            animate={scrolled ? 'right' : 'left'}
            initial="left"
            variants={variants}
            transition={{ duration: 0.2 }}
          >
            <p>{scrolled ? 'Matías | Portafolio' : '| Portafolio'}</p>
          </motion.div>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-secondary' : 'text-white'
              } hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
