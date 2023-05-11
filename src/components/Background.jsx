import React, { useState, useEffect, lazy, Suspense, memo } from 'react';

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
        <div
          style={{
            opacity: showCanvas ? 1 : 0,
            transition: 'opacity 0.1s ease-in-out',
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCirclesCanvas />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Background;
