// Curvas compartidas: todas las animaciones usan la misma "sensación"
// (arranque rápido, aterrizaje suave) en lugar de springs rebotones.
export const easings = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1]
}

// La dirección indica hacia dónde se mueve el elemento al aparecer
// ('up' => entra desde abajo y sube).
const offset = (direction, distance) => ({
  x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
  y: direction === 'up' ? distance : direction === 'down' ? -distance : 0
})

const transitionFor = (type, delay, duration) =>
  type === 'spring'
    ? { type: 'spring', stiffness: 120, damping: 20, mass: 0.9, delay }
    : { type: 'tween', ease: easings.out, delay, duration }

export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 24,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easings.out,
        delay
      }
    }
  }
}

export const fadeIn = (
  direction,
  type,
  delay = 0,
  duration = 0.7,
  distance = 40
) => {
  return {
    hidden: {
      ...offset(direction, distance),
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: transitionFor(type, delay, duration)
    }
  }
}

export const zoomIn = (delay = 0, duration = 0.6) => {
  return {
    hidden: {
      scale: 0.85,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: easings.out
      }
    }
  }
}

// Desplazamiento corto + fade (antes cruzaba el 100% del ancho del elemento).
export const slideIn = (direction, type, delay = 0, duration = 0.9) => {
  return {
    hidden: {
      x: direction === 'left' ? '-12%' : direction === 'right' ? '12%' : 0,
      y: direction === 'up' ? '12%' : direction === 'down' ? '-12%' : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: transitionFor(type, delay, duration)
    }
  }
}

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  }
}

// Palabra que sube desde una máscara (overflow-hidden en el contenedor).
export const wordReveal = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease: easings.out } }
}

// Props para que un elemento se anime una sola vez cuando entra al viewport.
// Cada elemento con `inView()` es independiente: no depende del contexto del
// padre, así que funciona aunque la sección se monte en cualquier momento.
export const inView = (amount = 0.2) => ({
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount, margin: '0px 0px -6% 0px' }
})
