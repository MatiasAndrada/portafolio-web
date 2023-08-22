import React from "react";
import{ Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 16,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 0,
          }}
        >
          {progress}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
