// StarsWorker.js
import PoissonDiskSampling from 'poisson-disk-sampling'

const pds = new PoissonDiskSampling({
  shape: [1, 1, 0.9], // tamaño de la caja
  minDistance: 0.2, // cantidad de estrellas
  maxTries: 5 // cantidad de intentos
})

const generatePositions = () => {
  const positions = new Float32Array(
    pds
      .fill()
      .map((p) => [p[0] - 0.5, p[1] - 0.5, p[2] - 0.5])
      .flat()
  )
  return positions
}

self.onmessage = (event) => {
  if (event.data === 'generatePositions') {
    const positions = generatePositions()
    postMessage(positions)
  }
}
