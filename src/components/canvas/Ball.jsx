import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import { CanvasLoader } from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={0.2} floatIntensity={0.2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          roughness={0.5} // Reduce la reflexión
          metalness={0.1} // Reduce la apariencia metálica
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          //reducir calidad de imagen
          map={decal}
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta si se trata de un dispositivo móvil por el ancho de pantalla
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth <= 500); // Cambia el valor según tus necesidades
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, isMobile ? 1: 2]} // Reduce la resolución en dispositivos móviles
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 2 - Math.PI / 18}
          maxPolarAngle={Math.PI / 2 + Math.PI / 18}
          enableDamping={true}
          dampingFactor={0.05}
          target={[0, 0, 0]}
        />
        {icon && <Ball imgUrl={icon} />}
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
