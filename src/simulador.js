function avanzar(x, y, orientacion, maxX, maxY) {
    if (orientacion === "N" && y < maxY) y++;
    else if (orientacion === "S" && y > 0) y--;
    else if (orientacion === "E" && x < maxX) x++;
    else if (orientacion === "O" && x > 0) x--;
    return [x, y];
  }
  
  