var estudiantes = ["Maria", "Jose", "Carlos", "Juan", "Cid", "Sergio"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

var x = 0;
while(x < estudiantes.length){
    saludarEstudiantes(estudiantes[x]);
    x++;
}

// while(estudiantes.length > 0){
//     var estudiante = estudiantes.shift();
//     saludarEstudiantes(estudiante);
// }
