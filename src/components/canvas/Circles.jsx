import React, { useEffect, useRef } from 'react'

const CircleCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const colors = ['#ff0080', '#36c5f0', '#ffce00', '#2ed573', '#8c7ae6']
    let circles = []

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    class Circle {
      constructor(x, y, radius, dx, dy, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = color
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx
          this.color = colors[getRandomInt(0, colors.length - 1)]
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy
          this.color = colors[getRandomInt(0, colors.length - 1)]
        }

        this.x += this.dx
        this.y += this.dy

        this.draw()
      }
    }

    const createCircles = () => {
      const numCircles = Math.floor((canvas.width * canvas.height) / 85000)
      circles.length = 0
      for (let i = 0; i < numCircles; i++) {
        const radius = getRandomInt(10, 50)
        const x = getRandomInt(radius, canvas.width - radius)
        const y = getRandomInt(radius, canvas.height - radius)
        let dx = getRandomInt(-2, 2)
        let dy = getRandomInt(-2, 2)
        if (i % 2 === 0) {
          dx /= 4
          dy /= 4
        }
        const color = colors[getRandomInt(0, colors.length - 1)]
        circles.push(new Circle(x, y, radius, dx, dy, color))
      }
    }

    createCircles()

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      circles.forEach((circle) => circle.update())
    }

    animate()

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)

      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        createCircles()
      }, 130) // Espera  antes de ejecutar la función técnica de debounce
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="background">
      <canvas ref={canvasRef}></canvas>;
    </div>
  )
}

export default CircleCanvas
