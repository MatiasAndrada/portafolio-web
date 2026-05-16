import React, { useEffect, useState } from 'react'
import { Decal, Float, View } from '@react-three/drei'
import * as THREE from 'three'

const textureCache = new Map()

const BallContent = ({ imgUrl, isMobile }) => {
  const [decal, setDecal] = useState(null)

  useEffect(() => {
    if (!imgUrl) {
      setDecal(null)
      return
    }

    if (textureCache.has(imgUrl)) {
      setDecal(textureCache.get(imgUrl))
      return
    }

    let mounted = true
    const loader = new THREE.TextureLoader()
    loader.load(
      imgUrl,
      (texture) => {
        textureCache.set(imgUrl, texture)
        if (mounted) setDecal(texture)
      },
      undefined,
      () => {
        console.warn(`Failed to load: ${imgUrl}`)
        if (mounted) setDecal(null)
      }
    )

    return () => {
      mounted = false
    }
  }, [imgUrl])

  const floatProps = {
    speed: isMobile ? 0.4 : 1.0,
    rotationIntensity: isMobile ? 0.05 : 0.15,
    floatIntensity: isMobile ? 0.05 : 0.1
  }

  return (
    <Float {...floatProps}>
      <mesh scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        {isMobile ? (
          <meshBasicMaterial color="#fff8eb" />
        ) : (
          <meshLambertMaterial color="#fff8eb" />
        )}
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            opacity={0.9}
          />
        )}
      </mesh>
    </Float>
  )
}

const BallView = ({ icon, isMobile, className, style }) => {
  return (
    <View className={className} style={style}>
      {icon && <BallContent imgUrl={icon} isMobile={isMobile} />}
    </View>
  )
}

export { BallView, BallContent }
export default BallView
