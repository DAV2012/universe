"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/ui/ring/ring.module.css";
import { meteoras } from "@/app/lib/data";
import Image from "next/image";

export default function Ring() {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const container = document.getElementById("Conteiner");
    if (container) {
      const calculatedDistance = ((container.clientHeight) / meteoras.length)+300;
      setDistance(calculatedDistance);
    }
  }, []);

  return (
    <div className={styles.container} id="Conteiner">
      <div className={styles.center}>         
     
        <div
                  className={`${styles.ring}`}

                  style={{
                    height:'600px',
                    width: `600px`,
                    position: "absolute",
                    top: "0%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${360}deg)`,
                    border:'none',
                    zIndex:99,
                  }}
                >
                  <Image
                    src={'/Purple-Planet.png'}
                    alt="Celular iPhone-13"
                    width={0}
                    height={0}
                    sizes="cover"
                    style={{
                      width: "600px",
                      position: "absolute",
                      left: "45%",
                      top:"30%",
                      transform: `translate(-50%, -50%)`,
                      height: `auto`,
                      
                      
                    }}
                  />
                </div>
          {distance > 0 &&
            meteoras.map((meteora, index) => {
              const size = distance + index * distance*0.3;
              let rotate = Math.random() * 360;
              return (
                <div
                  className={`${styles.ring} ${styles.gradient}`}
                  key={meteora.id}
                  style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                >
                  <Image
                    src={meteora.src}
                    alt="Celular iPhone-13"
                    width={0}
                    height={0}
                    sizes="cover"
                    style={{
                      width: "auto",
                      position: "absolute",
                      left: "50%",
                      transform: `translate(-50%, -50%)`,
                      height: `${Math.random() * distance * 0.1 + 30}px`,
                      backgroundImage:'conic-gradient(#272731 25%, rgba(39, 39, 49, 0%) 50%, #272731 75%, rgba(39, 39, 49, 0%) 100%) 1',
                    }}
                  />
                </div>
              );
            })}
        
      </div>
    </div>
  );
}
