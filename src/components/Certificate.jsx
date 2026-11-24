import React from 'react'
import { motion } from 'framer-motion'
import {
  FaAward,
  FaExternalLinkAlt,
  FaGraduationCap
} from 'react-icons/fa'
import { SectionWrapper } from '../hoc'
import { fadeIn, inView, staggerContainer } from '../utils/motion'
import { certificates, education } from '../constants'
import SectionHeader from './SectionHeader'

const reveal = fadeIn('up', 'tween', 0, 0.7, 24)

const ColumnTitle = ({ icon: Icon, children }) => (
  <h3 className="flex items-center gap-3 mb-6 text-emerald-400 font-semibold text-xl uppercase tracking-wide">
    <Icon aria-hidden="true" className="shrink-0" />
    {children}
  </h3>
)

const EducationItem = ({ title, institution, date, note }) => (
  <motion.li
    variants={reveal}
    className="relative pl-7 pb-10 last:pb-0 border-l-2 border-slate-700 last:border-transparent"
  >
    <span
      aria-hidden="true"
      className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20"
    />
    <p className="text-sm font-semibold text-secondary">{date}</p>
    <h4 className="mt-1 text-white text-lg font-bold leading-snug">{title}</h4>
    <p className="text-slate-300 text-[15px]">{institution}</p>
    {note && <p className="mt-2 text-slate-400 text-sm">{note}</p>}
  </motion.li>
)

const FeaturedCertificate = ({ title, issuer, grade, image, link }) => {
  return (
    <motion.div
      variants={reveal}
      className="rounded-2xl border border-secondary/30 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-6"
    >
      <div className="flex items-start gap-5">
        <img
          src={image}
          alt=""
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className="w-16 h-16 object-contain shrink-0"
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h4 className="text-white text-xl font-bold">{title}</h4>
            {grade && (
              <span className="rounded-full bg-emerald-500/15 px-3 py-0.5 text-xs font-semibold text-emerald-300">
                {grade}
              </span>
            )}
          </div>
          <p className="mt-1 text-slate-300 text-[15px]">{issuer}</p>
        </div>
      </div>

      {link && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-tertiary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
          >
            Ver certificado
            <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
          </a>
        </div>
      )}
    </motion.div>
  )
}

const CertificateItem = ({ title, issuer, year, image, link }) => {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
        <img
          src={image}
          alt=""
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          className="h-8 w-8 object-contain"
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-white font-semibold leading-tight">{title}</p>
        <p className="text-slate-400 text-sm">
          {[issuer, year].filter(Boolean).join(' · ')}
        </p>
      </div>
      {link && (
        <FaExternalLinkAlt
          aria-hidden="true"
          className="shrink-0 text-sm text-slate-500 transition-colors group-hover:text-secondary"
        />
      )}
    </>
  )

  const base =
    'group flex h-full items-center gap-4 rounded-xl bg-gray-900 bg-opacity-60 backdrop-blur-sm p-4'

  return (
    <motion.li variants={reveal}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver credencial de ${title} (${issuer})`}
          className={`${base} transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary`}
        >
          {content}
        </a>
      ) : (
        <div className={base}>{content}</div>
      )}
    </motion.li>
  )
}

const Certificate = () => {
  const featured = certificates.filter((certificate) => certificate.featured)
  const others = certificates.filter((certificate) => !certificate.featured)

  return (
    <>
      <SectionHeader subtitle="Educación y certificaciones" title="Formación" />

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ColumnTitle icon={FaGraduationCap}>Educación</ColumnTitle>
          <motion.ol
            variants={staggerContainer(0.15)}
            {...inView(0.2)}
            className="ml-2"
          >
            {education.map((item) => (
              <EducationItem key={item.title} {...item} />
            ))}
          </motion.ol>
        </div>

        <div className="lg:col-span-3">
          <ColumnTitle icon={FaAward}>Certificaciones</ColumnTitle>
          <motion.div
            variants={staggerContainer(0.08)}
            {...inView(0.1)}
            className="space-y-4"
          >
            {featured.map((certificate) => (
              <FeaturedCertificate key={certificate.title} {...certificate} />
            ))}
            <ul className="grid gap-3 sm:grid-cols-2">
              {others.map((certificate) => (
                <CertificateItem key={certificate.title} {...certificate} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Certificate, 'certificate')
