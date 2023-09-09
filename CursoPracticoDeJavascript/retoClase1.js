function planPlatzi(tipoDeSuscripcion, mensaje) {
  this.tipoDeSuscripcion = tipoDeSuscripcion;
  this.mensaje = mensaje;
}

let plan1 = new planPlatzi("Free", "Solo puedes tomar los cursos gratis");
let plan2 = new planPlatzi(
  "Basic",
  "Puedes tomar casi todos los cursos de Platzi durante un mes"
);
let plan3 = new planPlatzi(
  "Expert",
  "Puedes tomar casi todos los cursos de Platzi durante un año"
);
let plan4 = new planPlatzi(
  "ExpertPlus",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
);

let planes = [plan1, plan2, plan3, plan4];

const suscripcion = "Basic";

for (let i = 0; i < planes.length; i++) {
  if (planes[i].tipoDeSuscripcion === suscripcion) {
    console.log(planes[i].mensaje);
  }
}
