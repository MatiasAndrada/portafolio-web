import React, { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
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
  GlobalBackground,
  CanvasSpinner
} from './components'

const LazyTech = lazy(() => import('./components/Tech'))
const LazyContact = lazy(() => import('./components/Contact'))

// reducedMotion="user": con "reducir movimiento" activado en el sistema, se
// desactivan los desplazamientos/escalas y quedan solo los fades.
const AppContent = () => (
  <MotionConfig reducedMotion="user">
    <GlobalBackground />
    <Navbar />
    <Hero />
    <Background />
    <Suspense fallback={<CanvasSpinner />}>
      <About />
      <Experience />
      <Certificate />
      <LazyTech />
      <Now />
      <Works />
      <LazyContact />
      <Footer />
    </Suspense>
  </MotionConfig>
)

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppContent />
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
)

const App = () => <RouterProvider router={router} />

export default App
