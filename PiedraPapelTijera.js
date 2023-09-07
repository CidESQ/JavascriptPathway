let jugar = function () {
  arreglo = [" Piedra ", " Papel ", " Tijeras "];
  return arreglo[Math.floor(Math.random() * arreglo.length)];
};

jugador1 = jugar();
jugador2 = jugar();

console.log(
  "El jugador 1 escogio: " + jugador1 + "\nEl jugador 2 escogio: " + jugador2
);
 
if (jugador1 == " Piedra " && jugador2 == " Papel ") {
  console.log("Gana el jugador 2");
} else if (jugador1 == " Piedra " && jugador2 == " Tijeras ") {
  console.log("Gana el jugador 1");
} else if (jugador1 == " Papel " && jugador2 == " Piedra ") {
  console.log("Gana el jugador 1");
} else if (jugador1 == " Papel " && jugador2 == " Tijeras ") {
  console.log("Gana el jugador 2");
} else if (jugador1 == " Tijeras " && jugador2 == " Piedra ") {
  console.log("Gana el jugador 2");
} else if (jugador1 == " Tijeras " && jugador2 == " Papel ") {
  console.log("Gana el jugador 1");
} else {
  console.log("Empate");
}
