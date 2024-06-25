

const randomNum = (max,min)=> Math.random() * (max - min) + min;



// const particula = {
//   posicion: { x: 0, y: 0 },
//   velocidad: { x: 1, y: 1 },
//   color: "#ffff",
//   size: 5,
// };

const starShape = canvas => particula => {
  const ctx = canvas.getContext("2d");
  let angle = Math.PI / particula.points;
  return{
    run:()=>{
      ctx.beginPath();
      for (let i = 0; i < 2 * particula.points; i++) {
        let r = (i % 2 === 0) ? particula.outerRadius : particula.outerRadius/2;
        let currX = particula.posicion.x + Math.cos(i * angle) * r;
        let currY = particula.posicion.y + Math.sin(i * angle) * r;
        ctx.lineTo(currX, currY);
      }
      ctx.closePath();
      ctx.fillStyle = particula.color;
      ctx.fill();
    }
  }


};

const cleanup =(canvas)=>{

  canvas.getContext("2d").clearRect(0,0, canvas.width, canvas.height)

}


const randomParticule = (canvas)=>{
  return {
    posicion: { x: randomNum(0, canvas.width), y: randomNum(0,canvas.height) },
    velocidad: { x: randomNum(0,0), y: randomNum(0,0)},
    color: `rgba(255,255,255,${Math.random()})`,
    points:4,
    outerRadius: randomNum(4 , 2),
  }
}


const moverParticula = (particula) => {
    particula.posicion.x = particula.posicion.x + particula.velocidad.x
    particula.posicion.y = particula.posicion.y + particula.velocidad.y

    return particula
}


const compose = (...fns) => x => fns.reduceRight((acc, cur) => cur(acc), x);

const processParticule = canvas => compose(
  starShape(canvas),
)

export const loop = (indice, canvas, listaParticulas) => {
  
  requestAnimationFrame(
    () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

    cleanup(canvas);

    listaParticulas.push(randomParticule(canvas))

    listaParticulas.forEach(particula => {

      processParticule(canvas)(particula).run()
    });
    indice && loop(--indice, canvas, listaParticulas);
  });
};
