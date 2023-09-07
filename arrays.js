var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

var masFrutas = frutas.slice();
masFrutas.push("Kiwi"); //Agregar elemento al final del array

console.log("Primeras frutas " + frutas);
console.log("Segundas frutas " + masFrutas);

masFrutas.pop(); //Quitar elemento al final del array
console.log("Segundas frutas " + masFrutas);

masFrutas.unshift("Uvas"); //Agregar al principio 
console.log("Segundas frutas " + masFrutas);
masFrutas.unshift("Coco");
console.log("Segundas frutas " + masFrutas);
masFrutas.shift();