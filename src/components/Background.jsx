import React, { useState, useEffect, lazy, Suspense, memo } from 'react'
import { motion } from 'framer-motion'
import { BACKGROUND_CONFIG } from '../constants'

const LazyCirclesCanvas = lazy(() => import('./canvas/Circles'))

// Componente memoizado para evitar que se vuelva a renderizar si no cambian sus props
const MemoizedCirclesCanvas = memo(() => <LazyCirclesCanvas />)

const Background = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 1.2) {
        setHasScrolled(true)
        setShowCanvas(true)
      } else {
        setHasScrolled(false)
        setShowCanvas(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (
    BACKGROUND_CONFIG.sections === 'none' ||
    BACKGROUND_CONFIG.sections === 'stars'
  ) {
    return null
  }

  return (
    <div>
      {isMobile && <MemoizedCirclesCanvas style={{ opacity: 1 }} />}
      {!isMobile && (
        <div style={{ opacity: showCanvas ? 1 : 0 }}>
          <Suspense
            fallback={
              {
                /* <div>Loading...</div> */
              }
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showCanvas ? 1 : 0, y: showCanvas ? 0 : 20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <LazyCirclesCanvas />
            </motion.div>
          </Suspense>
        </div>
      )}
    </div>
  )
}

export default Background
