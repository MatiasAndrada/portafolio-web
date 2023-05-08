import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import PoissonDiskSampling from 'poisson-disk-sampling';

const Stars = (props) => {
  const ref = useRef();

  // Crea una instancia de PoissonDiskSampling con los parámetros deseados
  const pds = new PoissonDiskSampling({
    shape: [1, 1, 1], // Tamaño del espacio en el que se generan los puntos
    minDistance: 0.10, // Distancia mínima entre los puntos generados
    maxDistance: 0.20, // Distancia máxima entre los puntos generados
    tries: 20, // Número máximo de intentos para generar un nuevo punto
  });

  // Genera los puntos utilizando PoissonDiskSampling
  const [points, setPoints] = useState(() => {
    const positions = new Float32Array(pds.fill().map((p) => [p[0] - 0.5, p[1] - 0.5, p[2] - 0.5]).flat());
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group>
      <Points ref={ref} positions={points} {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[10]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
