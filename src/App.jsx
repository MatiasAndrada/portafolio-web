import React, { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  /*   About as LazyAbout,
  Certificate as LazyCertificate,
  Experience as LazyExperience,
  Now as LazyNow,
  // Feedbacks,
  Tech as LazyTech,
  Works as LazyWorks,
  Contact as LazyContact, */
  Hero,
  Navbar,
  Background,
  CanvasSpinner
} from './components'

const LazyAbout = lazy(() => import('./components/About'))
const LazyCertificate = lazy(() => import('./components/Certificate'))
const LazyExperience = lazy(() => import('./components/Experience'))
const LazyNow = lazy(() => import('./components/Now'))
const LazyTech = lazy(() => import('./components/Tech'))
const LazyWorks = lazy(() => import('./components/Works'))
const LazyContact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Background />
      <Suspense fallback={<CanvasSpinner />}>
        <LazyAbout />
        <LazyCertificate />
        <LazyExperience />
        <LazyNow />
        <LazyTech />
        <LazyWorks />
        <LazyContact />
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
