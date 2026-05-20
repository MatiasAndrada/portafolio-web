// StarsWorker.js
import PoissonDiskSampling from 'poisson-disk-sampling'

const pds = new PoissonDiskSampling({
  shape: [4, 3, 4], // tamaño de la caja expandido
  minDistance: 0.15, // más partículas
  maxTries: 8 // más intentos para mejor distribución
})

const generatePositions = () => {
  const positions = new Float32Array(
    pds
      .fill()
      .map((p) => [p[0] - 2, p[1] - 1.5, p[2] - 2])
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
