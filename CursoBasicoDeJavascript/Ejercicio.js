estudiantes = ["Jose", "Maria", "Carlos", "Cid"];
deathCount = 3;
nuevo = "Juan";

// function solution(estudiantes, deathCount, nuevo) {
//   if (deathCount === 0) {
//     estudiantes.push(nuevo)
//   } else if (deathCount > 0) {
//     for (var i = 0; i < deathCount; i++) {
//       estudiantes.pop();
//     }
//     estudiantes.push(nuevo);
//   }
//   return estudiantes;
// }

// function solution(estudiantes, deathCount, nuevo) {
//   for (var i = 0; i < deathCount; i++) {
//     estudiantes.pop();
//   }
//   estudiantes.push(nuevo);
//   return estudiantes;
// }

function solution(estudiantes, deathCount, nuevo) {
  for (deathCount; deathCount > 0; deathCount--) {
    estudiantes.pop();
  }
  estudiantes.push(nuevo);
  return estudiantes;
}

sobrevivientes = solution(estudiantes, deathCount, nuevo);
