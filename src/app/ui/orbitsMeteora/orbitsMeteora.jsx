'use client'


import { useState } from "react";
import CardInfo from "@/app/ui/card.jsx";
import { MeteoraPrincipal, Orbit } from "@/app/ui/orbit/orbit";
import { useEffect } from "react";
import Stars from "@/app/ui/stars/stars.jsx";



export default function OrbitsMeteoras({data}) {




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

        <Stars/>
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
              height="h-3/5 sm:h-2/6"
              traslate={`translate(-50%, ${-100}%) rotate(${10*count}deg)`}
              rotate="-rotate-90"
              onClick={handleSelect}
            />
            <MeteoraPrincipal
              id="select"
              meteora={data[count]}
              distanceOrbit={distance*data.length*0.5}
              height= "h-max sm:h-4/6"
              traslate={`translate(-54%, ${-20}%) rotate(${10*count}deg)`}
            />
            <MeteoraPrincipal
              id="before"
              meteora={data[count < data.length - 1 ? count + 1 : 0]}
              distanceOrbit={distance*data.length*0.5}
              height="h-3/5 sm:h-2/6"
              traslate={`translate(-50%, ${-100}%) rotate(${10*count}deg)`}
              rotate="rotate-90"
              onClick={handleSelect}
            />
        </Orbit>
      </>
    );
}
