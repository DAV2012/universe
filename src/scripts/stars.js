// src/script/stars.js
export function drawStars(ctx, canvas) {
  function drawStar(x, y, radius, points, outerRadius, innerRadius) {
    let angle = Math.PI / points;

    ctx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
      let r = (i % 2 === 0) ? outerRadius : innerRadius;
      let currX = x + Math.cos(i * angle) * r;
      let currY = y + Math.sin(i * angle) * r;
      ctx.lineTo(currX, currY);
    }
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de dibujar

  for (let i = 0; i < 200; i++) { // Cambia este número para ajustar la cantidad de estrellas
    let x = getRandom(0, canvas.width);
    let y = getRandom(0, canvas.height);
    let outerRadius = getRandom(1, 3);
    let innerRadius = outerRadius / 2;
    let points = 5;

    drawStar(x, y, 0, points, outerRadius, innerRadius);
  }
}
