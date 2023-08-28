import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0.2} floatIntensity={0.2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};
//Limitar la rotación de la esfera a 45 grados
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // desactivar el zoom
          enablePan={true} // desactivar el desplazamiento

          //establecer angulo de rotación
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 2 - Math.PI / 18} // limitar el ángulo polar mínimo
          maxPolarAngle={Math.PI / 2 + Math.PI / 18} // limitar el ángulo polar máximo

          enableDamping={true} // habilitar el efecto de amortiguamiento
          dampingFactor={0.05} // establecer la cantidad de amortiguamiento
          target={[0, 0, 0]} // establecer un punto de enfoque fijo en el centro de la escena
        />

        <Ball imgUrl={icon} />
      </Suspense>


    </Canvas>
  );
};

export default BallCanvas;