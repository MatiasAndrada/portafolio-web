import React, { useMemo, Suspense } from "react";
import { CanvasLoader } from "../Loader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const object = useMemo(() => earth.scene, [earth.scene]);
/*   const object = earth.scene; */

  return (
    <primitive object={object} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <div id="earthCanvas" style={{ height: "100%", overflow: "hidden", alignItems: "center" }}>
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 150,
            position: [-4, 3, 6],
          }}
        >
                <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          </Suspense>
          <Preload all />
        </Canvas>
    </div>
  );
};

export default EarthCanvas;
