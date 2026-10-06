import React, { useState, useEffect, useRef } from 'react'
import { styles } from '../styles'

// Las secciones livianas se montan de entrada, así el alto de la página no
// cambia mientras se scrollea. Las que cargan un canvas 3D (`deferMount`) se
// montan recién cuando se acercan al viewport, con margen para que ya estén
// listas cuando el usuario llega.
const SectionWrapper = (Component, idName, { deferMount = false } = {}) => {
  return function WrappedComponent() {
    const ref = useRef(null)
    const [shouldRender, setShouldRender] = useState(!deferMount)

    useEffect(() => {
      if (shouldRender || !ref.current) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldRender(true)
            observer.disconnect()
          }
        },
        { rootMargin: '600px 0px' }
      )
      observer.observe(ref.current)

      return () => observer.disconnect()
    }, [shouldRender])

    return (
      <section
        ref={ref}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        style={shouldRender ? undefined : { minHeight: '60vh' }}
        id={idName}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {shouldRender && <Component />}
      </section>
    )
  }
}

export default SectionWrapper
