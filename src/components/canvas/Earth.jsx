import React, { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const object = useMemo(() => earth.scene, [earth.scene]);

  return (
    <primitive object={object} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById("earthCanvas").getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="earthCanvas" style={{ height: "100%", overflow: "hidden", alignItems: "center" }}>
      {isVisible && (
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
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;
