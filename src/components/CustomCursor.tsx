import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const sparkContainerRef = useRef<HTMLDivElement>(null);
  const blastContainerRef = useRef<HTMLDivElement>(null);
  const coords = useRef({ x: 0, y: 0 });
  const trailCoords = useRef({ x: 0, y: 0 });
  const lastBlastTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coords.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Create spark effect
      if (Math.random() > 0.9) {
        createSpark(e.clientX, e.clientY);
      }

      // Create clock blast effect periodically
      const currentTime = Date.now();
      if (currentTime - lastBlastTime.current > 2000) {
        createClockBlast(e.clientX, e.clientY);
        lastBlastTime.current = currentTime;
      }
    };

    const createClockBlast = (x: number, y: number) => {
      if (!blastContainerRef.current) return;
      
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'blast-particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 4 + Math.random() * 2;
        
        blastContainerRef.current.appendChild(particle);
        
        let distance = 0;
        let opacity = 1;
        
        const animateBlast = () => {
          distance += velocity;
          opacity -= 0.015;
          
          const currentX = Math.cos(angle) * distance;
          const currentY = Math.sin(angle) * distance;
          
          particle.style.transform = `translate(${currentX}px, ${currentY}px) scale(${1 - distance / 200})`;
          particle.style.opacity = opacity.toString();
          
          if (opacity > 0 && distance < 200) {
            requestAnimationFrame(animateBlast);
          } else {
            particle.remove();
          }
        };
        
        requestAnimationFrame(animateBlast);
      }
    };

    const createSpark = (x: number, y: number) => {
      if (!sparkContainerRef.current) return;
      
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 2 + Math.random() * 3;
      
      sparkContainerRef.current.appendChild(spark);
      
      let opacity = 1;
      let currentX = 0;
      let currentY = 0;
      
      const animateSpark = () => {
        currentX += Math.cos(angle) * velocity;
        currentY += Math.sin(angle) * velocity;
        opacity -= 0.02;
        
        spark.style.transform = `translate(${currentX}px, ${currentY}px)`;
        spark.style.opacity = opacity.toString();
        
        if (opacity > 0) {
          requestAnimationFrame(animateSpark);
        } else {
          spark.remove();
        }
      };
      
      requestAnimationFrame(animateSpark);
    };

    const animate = () => {
      trailCoords.current.x += (coords.current.x - trailCoords.current.x) * 0.15;
      trailCoords.current.y += (coords.current.y - trailCoords.current.y) * 0.15;
      
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailCoords.current.x}px, ${trailCoords.current.y}px)`;
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('hover');
      }
      if (trailRef.current) {
        trailRef.current.classList.add('hover');
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('hover');
      }
      if (trailRef.current) {
        trailRef.current.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <style>{`
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          top: -10px;
          left: -10px;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
        }

        .cursor-arrow {
          width: 100%;
          height: 100%;
          position: relative;
          transform: rotate(-45deg);
        }

        .cursor-arrow::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 16px solid #2df1b5;
          filter: drop-shadow(0 0 8px #2df1b5) drop-shadow(0 0 16px #2df1b5);
          animation: cursorPulse 2s infinite;
        }

        .cursor-trail {
          position: fixed;
          width: 30px;
          height: 30px;
          top: -15px;
          left: -15px;
          pointer-events: none;
          z-index: 9998;
        }

        .trail-tail {
          width: 100%;
          height: 100%;
          border: 2px solid #2df1b5;
          border-radius: 50%;
          opacity: 0.3;
          background: radial-gradient(circle, rgba(45, 241, 181, 0.2) 0%, transparent 70%);
          filter: drop-shadow(0 0 10px #2df1b5);
          animation: trailPulse 1.5s infinite;
        }

        .spark-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9997;
        }

        .blast-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9996;
        }

        .spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #2df1b5;
          border-radius: 50%;
          filter: drop-shadow(0 0 6px #2df1b5);
          pointer-events: none;
        }

        .blast-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #2df1b5 0%, #00ff88 50%, transparent 70%);
          border-radius: 50%;
          filter: drop-shadow(0 0 10px #2df1b5) drop-shadow(0 0 20px #00ff88);
          pointer-events: none;
        }

        .custom-cursor.hover .cursor-arrow::before {
          border-bottom-color: #00ff88;
          filter: drop-shadow(0 0 12px #00ff88) drop-shadow(0 0 24px #00ff88);
          transform: scale(1.2);
        }

        .cursor-trail.hover .trail-tail {
          border-color: #00ff88;
          filter: drop-shadow(0 0 15px #00ff88);
          transform: scale(1.3);
        }

        @keyframes cursorPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px #2df1b5) drop-shadow(0 0 16px #2df1b5);
          }
          50% {
            filter: drop-shadow(0 0 12px #2df1b5) drop-shadow(0 0 24px #2df1b5) drop-shadow(0 0 32px #2df1b5);
          }
        }

        @keyframes trailPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .custom-cursor,
          .cursor-trail,
          .spark-container,
          .blast-container {
            display: none;
          }
        }
      `}</style>
      
      <div ref={cursorRef} className="custom-cursor">
        <div className="cursor-arrow"></div>
      </div>
      
      <div ref={trailRef} className="cursor-trail">
        <div className="trail-tail"></div>
      </div>
      
      <div ref={sparkContainerRef} className="spark-container"></div>
      
      <div ref={blastContainerRef} className="blast-container"></div>
    </>
  );
};

export default CustomCursor;
