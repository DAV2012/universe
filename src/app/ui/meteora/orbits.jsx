'use client'

import { meteoras } from "@/app/lib/data";
import { MeteoraPrincipal, Orbit } from "../orbits/orbit";
import { useState } from "react";
import StarCanvas from "../stars/stars";
import CardInfo from "../card";



export default function Orbits() {
    let distance = 400
    let maxOrbit = distance* meteoras.length*0.3 + distance


    const [count, setCount] = useState(0);

    const handleSelect = (e) => {
      const action = e.target.id;
      if (action === "after") {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : meteoras.length - 1));
      } else if (action === "before") {
        setCount((prevCount) => (prevCount < meteoras.length - 1 ? prevCount + 1 : 0));
      }
    };
  
    return (
      <>
        <CardInfo/>
        <StarCanvas></StarCanvas>
        <Orbit distance={distance} rotate={0} meteoras={meteoras} distanceOrbit={maxOrbit}>
          <MeteoraPrincipal
            id="after"
            meteora={meteoras[count > 0 ? count - 1 : meteoras.length - 1]}
            distanceOrbit={maxOrbit}
            height="200px"
            traslate={`translate(-50%, -50%) rotate(${50*count}deg)`}
            rotate="-90deg"
            onClick={handleSelect}
          />
          <MeteoraPrincipal
            id="select"
            meteora={meteoras[count]}
            distanceOrbit={600}
            height="400px"
            traslate={`translate(-50%, -45%) rotate(${20*count}deg)`}
            rotate="0deg"
          />
          <MeteoraPrincipal
            id="before"
            meteora={meteoras[count < meteoras.length - 1 ? count + 1 : 0]}
            distanceOrbit={maxOrbit}
            height="200px"
            traslate={`translate(-50%, -50%) rotate(${50*count}deg)`}
            rotate="90deg"
            onClick={handleSelect}
          />
        </Orbit>
      </>
    );
}
