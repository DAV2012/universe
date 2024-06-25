import styles from "@/app/ui/orbits/orbits.module.css";
import Image from "next/image";
import StarCanvas from "../stars/stars";
import { useEffect } from "react";
import { useState } from "react";

export function Orbit({children, distance, rotate,meteoras, distanceOrbit,count}) {

  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {

    // Filtro cíclico para manejar casos en los límites del array
    const newArray = meteoras.filter((_, index) => {
      const length = meteoras.length;
      const prevIndex = (count - 1 + length) % length;
      const nextIndex = (count + 1) % length;
      const exclude = index !== prevIndex && index !== count && index !== nextIndex;

      return exclude;
    });

    setFilteredArray(newArray);
    console.log('Filtered Array:', newArray);
  }, [count, meteoras]);

  const maxOrbit = distance * meteoras.length * 0.3 + distance

  console.log(filteredArray)
  return (
    <div
      id="Conteiner"
      className={styles.container}
      style={{ height: maxOrbit > 0 ? maxOrbit*0.7 : 0 }}
    >
      {children}
      {distance > 0  &&
        filteredArray.map((meteora, index) => {
          const size = distance + index * distance * 0.3;
          rotate = Math.random() * 360;

          return (
            <div
              className={`${styles.ring} ${styles.withGradient}`}
              key={meteora.id}
              style={{
                height: `${size}px`,
                width: `${size}px`,
                transform: `rotate(${ rotate> 300 || rotate< 55 ? 180 : rotate   }deg)`,
                zIndex: 0,
              }}
            >
              <Image
                src={meteora.srcBlur}
                className={styles.imgPlanet}
                alt="Celular iPhone-13"
                width={0}
                height={0}
                sizes="cover"
                style={{
                  height: `${Math.random() * distance * 0.1 + 30}px`,
                  zIndex: 1,
                }}
              />
            </div>
          );
        })}
    </div>
  );
}

export function MeteoraPrincipal({id, meteora,distanceOrbit, height, onClick, traslate, rotate,left}) {

  return (

      <div

        className={`${styles.ring}`}
        style={{
          height: distanceOrbit,
          width: distanceOrbit,
          rotate:rotate,
          zIndex:2,
          left:left

        }}
      >
        <Image
          id={id}
          onClick={onClick}
          src={meteora.src}
          className={styles.imgPlanet}
          alt={meteora.alt}
          width={0}
          height={0}
          sizes="cover"
          style={{
            height: height,
            transform: traslate,
            border: "none",

            backgroundImage: "none",
            zIndex:10
          }}
        />
      </div>
  );
}
