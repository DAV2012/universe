'use client'

// src/components/StarCanvas.jsx
// src/components/StarCanvas.jsx
import React, { useEffect, useRef } from 'react';
import { drawStars } from '@/scripts/stars.js'; // Importa la función del script
import styles from '@/app/ui/stars/stars.module.css';

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStars(ctx, canvas); // Llama a la función para dibujar estrellas

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars(ctx, canvas); // Redibuja las estrellas al cambiar el tamaño de la ventana
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default StarCanvas;

