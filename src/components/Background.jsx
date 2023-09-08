import React, { useState, useEffect, lazy, Suspense, memo } from 'react';
import { motion } from 'framer-motion';
const LazyCirclesCanvas = lazy(() => import('./canvas/Circles'));

const MemoizedCirclesCanvas = memo(() => <LazyCirclesCanvas />);

const Background = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 1.2) {
        setHasScrolled(true);
        setShowCanvas(true);
      } else {
        setHasScrolled(false);
        setShowCanvas(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isMobile && <MemoizedCirclesCanvas style={{ opacity: 1 }} />}
      {!isMobile && (
        <div style={{ opacity: showCanvas ? 1 : 0 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y ligeramente desplazado hacia abajo
              animate={{ opacity: showCanvas ? 1 : 0, y: showCanvas ? 0 : 20 }} // Animación de entrada/salida
              transition={{ duration: 0.3, ease: "easeInOut" }} // Duración y tipo de transición
            >
              <LazyCirclesCanvas />
            </motion.div>
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Background;
