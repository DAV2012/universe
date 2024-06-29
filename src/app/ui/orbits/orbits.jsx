'use client'


import { useState } from "react";
import CardInfo from "@/app/ui/card.jsx";
import Estrellas from "@/app/ui/stars/stars.jsx";
import { MeteoraPrincipal, Orbit } from "@/app/ui/orbit/orbit";
import { useEffect } from "react";



export default function Orbits({data}) {




    const [count, setCount] = useState(0);
    const [distance, setDistance] = useState(0);


    useEffect(()=>{
      const maxWith = window.innerWidth
      setDistance(maxWith/data.length)

    },[data])
  
    

    const handleSelect = (e) => {
      const action = e.target.id;

      if (action === "after") {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : data.length - 1));
      } else if (action === "before") {
        setCount((prevCount) => (prevCount < data.length - 1 ? prevCount + 1 : 0));
      }

    };

  
    return (
      <>
        <CardInfo data={data[count]}/>

        <Estrellas/>
        <Orbit 
          distance={distance} 
          rotate={0} 
          data={data} 
          count={count} 
          distanceOrbit={distance*data.length} >
            <MeteoraPrincipal
              id="after"
              meteora={data[count > 0 ? count - 1 : data.length - 1]}
              distanceOrbit={distance*data.length*0.5}
              height="30%"
              traslate={`translate(-50%, ${-150}%) rotate(${10*count}deg)`}
              rotate="-rotate-90"
              onClick={handleSelect}
            />
            <MeteoraPrincipal
              id="select"
              meteora={data[count]}
              distanceOrbit={distance*data.length*0.5}
              height= "70%"
              traslate={`translate(-50%, ${-3}%) rotate(${10*count}deg)`}
            />
            <MeteoraPrincipal
              id="before"
              meteora={data[count < data.length - 1 ? count + 1 : 0]}
              distanceOrbit={distance*data.length*0.5}
              height="30%"
              traslate={`translate(-50%, ${-150}%) rotate(${10*count}deg)`}
              rotate="rotate-90"
              onClick={handleSelect}
            />
        </Orbit>
      </>
    );
}
