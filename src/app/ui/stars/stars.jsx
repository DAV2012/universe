import { loop  } from "@/scripts/stars";
import { useRef } from "react";
import { useEffect } from "react"
import styles from "@/app/ui/stars/stars.module.css"

export default function Estrellas () {
    const canvasRef = useRef(null)
    
        useEffect(()=>{
            const canvas = canvasRef.current;
            let listaParticulas = [];
            loop(100,canvas,listaParticulas)

            
            const handleResize = () => {
                listaParticulas=[]
                loop(100,canvas,listaParticulas); // Redibuja las estrellas al cambiar el tamaño de la ventana
              };
          
              window.addEventListener('resize', handleResize);
          
              return () => {
                window.removeEventListener('resize', handleResize);
              };

        },[])

    return (
        <canvas ref={canvasRef} id="canvas" height={500} width={500} className={styles.canvas}/>
    )
}