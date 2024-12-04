import React, { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Certificate,
  Experience,
  Now,
  //Feedbacks,
  Works,
  Footer,
  Hero,
  Navbar,
  Background,
  CanvasSpinner
} from './components'

const LazyTech = lazy(() => import('./components/Tech'))
const LazyContact = lazy(() => import('./components/Contact'))
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Background />
      <Suspense fallback={<CanvasSpinner />}>
        <About />
        <Certificate />
        <Experience />
        <Now />
        <LazyTech />
        <Works />
        <LazyContact />
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
