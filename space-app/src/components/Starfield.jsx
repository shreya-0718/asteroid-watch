import { useEffect, useRef } from 'react';

function Starfield() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.67,
      alpha: Math.random(),
    }));

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += (Math.random()-0.5) * 0.1;
        star.alpha = Math.max(0.2, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z--1"
    />

  );
}

export default Starfield;