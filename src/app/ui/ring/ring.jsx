
import styles from "@/app/ui/ring/ring.module.css";
import { meteoras } from "@/app/lib/data";
import Image from "next/image";
import StarCanvas from "../stars/stars";

export default function Ring() {

  let distance= 500;
  let rotate = 0;
  let maxOrbit = distance + meteoras.length * distance * 0.3


  return (
    <div 
    id="Conteiner"
    className={styles.container} 
    style={{height:maxOrbit > 0 ? maxOrbit:0}}
    >
      <StarCanvas></StarCanvas>
      {<div
                className={`${styles.ring}`}
                style={{
                  height: `600px`,
                  width: `600px`,

                }}
              >
                <Image
                  src={'/Purple-Planet.png'}
                  className={styles.imgPlanet}
                  alt="Celular iPhone-13"
                  width={0}
                  height={0}
                  sizes="cover"
                  style={{
                    height: `500px`,
                    transform: 'translate(-56%, -20%)',
                    border:'none',
                    zIndex:3,
                    backgroundImage:"none"
                  }}
                />
              </div>}
        {distance > 0 &&
          meteoras.map((meteora, index) => {
            const size = distance + index * distance * 0.3;
            rotate = Math.random() * 360;

            return (
              <div
                className={`${styles.ring} ${styles.withGradient}`}
                key={meteora.id}
                style={{
                  height: `${size}px`,
                  width: `${size}px`,
                  transform: `rotate(${rotate}deg)`,
                  zIndex:0,
                }}
              >
                <Image
                  src={meteora.src}
                  className={styles.imgPlanet}
                  alt="Celular iPhone-13"
                  width={0}
                  height={0}
                  sizes="cover"
                  style={{
                    height: `${Math.random() * distance * 0.1 + 30}px`,
                    zIndex:99
                  }}
                />
              </div>
            );
          })}
      </div>
  );
}
