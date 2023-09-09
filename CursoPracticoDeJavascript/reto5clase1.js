// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
  };
  function readObject(object) {
    for (let key in object) {
      console.log(object[key]);
       }
   }
  readObject(myCar);