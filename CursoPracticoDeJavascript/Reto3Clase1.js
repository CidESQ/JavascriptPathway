// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
// 💡 Pista: puedes usar la función prompt de JavaScript.

while (true) {
    var pregunta = prompt("Cuanto es 2 + 2:");
  if (pregunta == 4) {
    console.log("Respuesta correcta!");
    break;
  } else {
    console.log("Vuelve a intentarlo.");
  }
}
