function avanzar(x, y, orientacion, maxX, maxY) {
    if (orientacion === "N" && y < maxY) y++;
    else if (orientacion === "S" && y > 0) y--;
    else if (orientacion === "E" && x < maxX) x++;
    else if (orientacion === "O" && x > 0) x--;
    return [x, y];
  }
  function ejecutarComandos(comandos) {
    const [dimensiones, posicionInicial, movimientos] = comandos.split("/");
  
    const [maxX, maxY] = dimensiones.split(",").map(Number);
  
    let [x, y, orientacion] = posicionInicial.match(/(\d+),(\d+)([NESO])/).slice(1);
    x = parseInt(x);
    y = parseInt(y);
  
    for (let movimiento of movimientos) {
      if (movimiento === "I") {
        orientacion = girarIzquierda(orientacion);
      } else if (movimiento === "D") {
        orientacion = girarDerecha(orientacion);
      } else if (movimiento === "A") {
        [x, y] = avanzar(x, y, orientacion, maxX, maxY);
      }
    }
  
    return `${x},${y}${orientacion}`;
  }

  function girarIzquierda(orientacion) {
    const giros = { "N": "O", "O": "S", "S": "E", "E": "N" };
    return giros[orientacion];
  }
  
  function girarDerecha(orientacion) {
    const giros = { "N": "E", "E": "S", "S": "O", "O": "N" };
    return giros[orientacion];
  }
  
  export default ejecutarComandos;
  