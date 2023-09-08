// Convierte el siguiente código en una función, pero,
//  cambiando cuando sea necesario las variables constantes
//  por parámetros y argumentos en una función:
// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function persona(name, lastname, nickname) {
  this.name = name;
  this.lastname = lastname;
  this.nickname = nickname;
  let completeName = name + lastname;

  console.log(
    "Mi nombre es " +
      completeName +
      ", pero prefiero que me digas " +
      nickname +
      "."
  );
}

// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año.");
} else if (tipoDeSuscripcion) {
  console.log(
    "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año."
  );
}
