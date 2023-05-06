import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(1000 * 3); // Usamos una matriz Typed de 1000 puntos en lugar de crear una matriz en cada renderizado
    random.inSphere(positions, { radius: 0.8 }); // Llenamos la matriz con las posiciones aleatorias
    return positions;
  }, []);

  useFrame((state, delta) => {
    // Memoizamos la función useFrame para evitar que se vuelva a ejecutar en cada renderizado
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        frustumCulled={false} // Desactivamos la culling de frustum para que los puntos se dibujen fuera de la cámara
        {...props}
      >
        <pointsMaterial
          transparent
          size={0.002} // Aumentamos el tamaño de los puntos
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
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
