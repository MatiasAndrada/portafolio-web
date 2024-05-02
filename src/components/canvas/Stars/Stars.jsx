import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { CanvasSpinner } from '../../Loader'

const worker = new Worker(new URL('./StarsWorker.js', import.meta.url), {
  type: 'module'
})

const Stars = ({ points }) => {
  const ref = useRef()
  /*   const [points, setPoints] = useState([]) */

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group>
      <Points ref={ref} positions={points}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.004} // reducir el tamaño de los puntos
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
const StarsCanvas = () => {
  const [shouldRenderStars, setShouldRenderStars] = useState(false)
  const [points, setPoints] = useState([])

  useEffect(() => {
    worker.onmessage = (event) => {
      const receivedPositions = event.data
      setPoints(receivedPositions)
    }
    worker.postMessage('generatePositions')
    return () => {
      worker.terminate()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 200) {
        setShouldRenderStars(false)
      } else {
        setShouldRenderStars(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    setShouldRenderStars(true) // Reiniciar al montar el componente

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    shouldRenderStars && (
      <div className="absolute inset-0 z-[10]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={<CanvasSpinner />}>
            <Stars points={points} />
          </Suspense>
        </Canvas>
      </div>
    )
  )
}

export default StarsCanvas
