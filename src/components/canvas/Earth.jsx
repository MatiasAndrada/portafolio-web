import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { CanvasLoader } from '../Loader'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF
} from '@react-three/drei'
import * as THREE from 'three'

const MODEL_URL = './planet/scene.gltf'

// Halo atmosférico: esfera con caras traseras y fresnel aditivo, así brilla
// solo en el borde y se desvanece hacia afuera.
const atmosphereVertex = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const atmosphereFragment = /* glsl */ `
  uniform vec3 uColor;
  varying vec3 vNormal;
  void main() {
    float f = clamp(-dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
    float intensity = pow(f, 2.2) * 1.9;
    gl_FragColor = vec4(uColor * intensity, intensity);
  }
`

const Atmosphere = ({ radius = 2.75, color = '#3aa0ff' }) => {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertex,
        fragmentShader: atmosphereFragment,
        uniforms: { uColor: { value: new THREE.Color(color) } },
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false
      }),
    [color]
  )

  useEffect(() => () => material.dispose(), [material])

  return (
    <mesh material={material}>
      <sphereGeometry args={[radius, 64, 64]} />
    </mesh>
  )
}

const Earth = () => {
  const group = useRef()
  const { scene, animations } = useGLTF(MODEL_URL)
  const { actions } = useAnimations(animations, group)

  // El modelo es unlit y la textura del planeta queda muy oscura: se sube un
  // poco el brillo sin tocar el archivo.
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material?.name === 'Planet') {
        child.material.color.setScalar(1.35)
      }
    })
  }, [scene])

  // Animación embebida en el glTF (las nubes giran y "respiran").
  useEffect(() => {
    const action = Object.values(actions)[0]
    action?.reset().play()
    return () => action?.stop()
  }, [actions])

  return (
    <group ref={group}>
      <primitive object={scene} scale={2.5} />
      <Atmosphere />
    </group>
  )
}

const EarthCanvas = () => {
  const wrapperRef = useRef()
  const [visible, setVisible] = useState(true)

  // Sin esto el render sigue corriendo (autoRotate + animación) con la
  // sección fuera de pantalla.
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '100px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    // OrbitControls fija touch-action: none inline, lo que bloquea el scroll de
    // la página al deslizar sobre el planeta en mobile; `!` lo pisa.
    <div
      id="earthCanvas"
      ref={wrapperRef}
      className="[&_canvas]:!touch-pan-y"
      style={{ height: '100%', overflow: 'hidden', alignItems: 'center' }}
    >
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 150,
          position: [-4, 3, 8.5]
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={1.2}
            enableDamping
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.3}
            minPolarAngle={Math.PI / 2.3}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default EarthCanvas
