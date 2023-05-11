import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import PoissonDiskSampling from 'poisson-disk-sampling';
import Loader from '../Loader';

const Stars = (props) => {
  const ref = useRef();

  const pds = new PoissonDiskSampling({
    shape: [1, 1, 0.8], // forma del espacio de muestreo
    minDistance: 0.2, // reducir la cantidad de puntos generados
    
    maxTries: 30,
  });


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
          size={0.002} // reducir el tamaño de los puntos
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
      <Canvas camera={{ position: [0, 0, 0.7] }}> 
      <Suspense fallback={<Loader />}>
        <Stars />
      </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
