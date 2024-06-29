import styles from "@/app/ui/orbit/orbit.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export function Orbit({ children, distance, rotate, data, distanceOrbit, count }) {
  const [filteredArray, setFilteredArray] = useState([]);


  useEffect(() => {

    // Filtro cíclico para manejar casos en los límites del array
    const newArray = data.filter((_, index) => {
      const length = data.length;
      const prevIndex = (count - 1 + length) % length;
      const nextIndex = (count + 1) % length;
      const exclude = index !== prevIndex && index !== count && index !== nextIndex;

      return exclude;
    });
    setFilteredArray(newArray);
  }, [count, data]);


  return (
    <div
      id="Conteiner"
      className={styles.container}
      style={{ height:distanceOrbit,  marginTop:distanceOrbit>800?-distanceOrbit/3:-distanceOrbit*0.2}}
    >
      {children}
      {distance > 0  &&
        filteredArray.map((meteora, index) => {
          const size = distance + index * distance + 80;
          rotate = Math.random() * 360;

          return (
            <div
              className={`${styles.ring} ${styles.withGradient}`}
              key={index}
              style={{
                height: `${size}px`,
                width: `${size}px`,
                transform: `rotate(${ rotate> 300 || rotate< 55 ? 180 : rotate   }deg)`,
                zIndex: 0,
              }}
            >
              <Image
                src={meteora.src}
                className={styles.imgPlanet}
                alt={meteora.alt}
                width={0}
                height={0}
                sizes="cover"
                style={{
                  height: `${Math.random() * distance * 0.1 + 30}px`,
                  zIndex: 1,
                  filter: `drop-shadow(-4px -4px 4px ${meteora.color}) blur(0.8px)`,
                  
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

        className={`${styles.ring} ${rotate}`}
        style={{
          height: distanceOrbit,
          width: distanceOrbit,
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
          priority={true}
          style={{
            height: height,
            transform: traslate,
            border: "none",
            backgroundImage: "none",
            zIndex:10,
            filter: `drop-shadow(-8px -8px 15px ${meteora.color})`
          }}
        />
      </div>
  );
}
