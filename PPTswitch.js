let jugar = function () {
  arreglo = [" Piedra ", " Papel ", " Tijeras "];
  return arreglo[Math.floor(Math.random() * arreglo.length)];
};

let jugador1 = jugar();
let jugador2 = jugar();

console.log("El jugador 1 escogio: " + jugador1);
console.log("El jugador 2 escogio: " + jugador2);

switch (true) {
  case jugador1 == " Piedra " && jugador2 == " Papel ":
    console.log("Jugador 2 gana!");
    break;

  case jugador1 == " Piedra " && jugador2 == " Tijeras ":
    console.log("Jugador 1 gana!");
    break;

  case jugador1 == " Papel " && jugador2 == " Piedra ":
    console.log("Jugador 1 gana!");
    break;

  case jugador1 == " Papel " && jugador2 == " Tijeras ":
    console.log("Jugador 2 gana!");
    break;

  case jugador1 == " Tijeras " && jugador2 == " Papel ":
    console.log("Jugador 1 gana!");
    break;

  case jugador1 == " Tijeras " && jugador2 == " Piedra ":
    console.log("Jugador 2 gana!");
    break;

  case jugador1 == jugador2:
    console.log("Empate!");
}
