import React, { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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

const AppContent = () => (
  <>
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
  </>
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
