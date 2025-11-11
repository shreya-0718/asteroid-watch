import { useEffect, useRef } from 'react';

function Starfield() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = Array.from({ length: 300 }, () => ({
      x: (Math.random()-0.1) * window.innerWidth*1.2,
      y: (Math.random()-0.1) * window.innerHeight*1.2,
      radius: Math.random() * 1.67,
      alpha: Math.random(),
      depth: Math.random()*6+1,
    }));

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const offsetX = (mouseX - canvas.width / 2)/(20*star.depth);
        const offsetY = (mouseY - canvas.height / 2)/(20*star.depth);

        const x_new = star.x + offsetX;
        const y_new = star.y + offsetY;

        star.alpha += (Math.random()-0.5) * 0.1;
        star.alpha = Math.max(0.2, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(x_new, y_new, star.radius, 0, Math.PI * 2);
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