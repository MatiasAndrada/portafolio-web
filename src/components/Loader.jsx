import React from 'react'
import { Html, useProgress } from '@react-three/drei'

export const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 16,
            color: '#f1f1f1',
            fontWeight: 800,
            marginTop: 0
          }}
        >
          {progress}%
        </p>
      </span>
    </Html>
  )
}

export const CanvasSpinner = () => {
  //spinner with tailwindcss
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>
  )
}
