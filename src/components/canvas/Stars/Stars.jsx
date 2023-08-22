import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Stars = (props) => {
  const ref = useRef();
  const [points, setPoints] = React.useState([]);
  const workerRef = useRef();

  useEffect(() => {
    // Crear el Web Worker y almacenarlo en el ref
    workerRef.current = new Worker(new URL('./StarsWorker.js', import.meta.url), {
      type: 'module',
    });

    workerRef.current.onmessage = (event) => {
      const receivedPositions = event.data;
      setPoints(receivedPositions);
    };

    workerRef.current.postMessage('generatePositions');

    // Limpiar el Web Worker al desmontar
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    }
  );

  return (
    <group>
      <Points ref={ref} positions={points} {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};



const StarsCanvas = () => {

  useEffect(() => {
    //controlar el contexto del proceso para que cuando se desplaza a la altura de pantalla -200 px se termine el proceso y en caso de volver a subir se vuelva a iniciar
    const handleScroll = () => {
      const rect = document.getElementById("starsCanvas").getBoundingClientRect();
      if (rect.top <= window.innerHeight - 200 && rect.bottom >= 0) {
        canvasRef.current.start();
      } else {
        canvasRef.current.stop();
      }
    }
  }, []);


  return (
    <div className="absolute inset-0 z-[10]">
      <Canvas camera={{ position: [0, 0, 0.7] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
