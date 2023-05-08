import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const colors = ["#ff0080", "#36c5f0", "#ffce00", "#2ed573", "#8c7ae6"];
    let circles = [];

    // Set canvas width and height to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate random integer between min and max (inclusive)
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Circle class
    class Circle {
      constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Change direction and color when circle hits edge of screen
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
          this.color = colors[getRandomInt(0, colors.length - 1)];
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
          this.color = colors[getRandomInt(0, colors.length - 1)];
        }

        // Move circle
        this.x += this.dx;
        this.y += this.dy;

        // Draw circle
        this.draw();
      }
    }

    // Create circles
    const createCircles = () => {
      const numCircles = Math.floor(canvas.width * canvas.height / 70000); // Adjust density of circles
      circles.length = 0;
      for (let i = 0; i < numCircles; i++) {
        const radius = getRandomInt(10, 50);
        const x = getRandomInt(radius, canvas.width - radius);
        const y = getRandomInt(radius, canvas.height - radius);
        const dx = getRandomInt(-2, 2);
        const dy = getRandomInt(-2, 2);
        const color = colors[getRandomInt(0, colors.length - 1)];
        circles.push(new Circle(x, y, radius, dx, dy, color));
      }
    };

    // Create circles
    createCircles();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach(circle => circle.update());
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createCircles();
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

    return (
        <div className="background ">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default Background;
