// Declarativa
function miFuncion() {
  return 3 * 2;
}

// Expresion
var miFuncion = function (a, b) {
  return a + b;
};
//-----------------------------------
function otraFuncion(a, b) {
  return a * b + b;
}

function saludar(estudiantes) {
  console.log("Hola " + estudiantes);
}

saludar("Cid");
function saludar2(estudiante) {
  console.log(`Hola ${estudiante}`);
}

function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}
