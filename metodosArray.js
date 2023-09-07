var articles = [
  { nombre: "Bici", costo: 300 },
  { nombre: "TV", costo: 4000 },
  { nombre: "Libro", costo: 200 },
  { nombre: "Compu", costo: 30200 },
  { nombre: "Mouse", costo: 400 },
  { nombre: "Teclado", costo: 700 },
  { nombre: "airpods", costo: 2600 },
  { nombre: "Compu", costo: 3200 },
  { nombre: "vaso", costo: 50 },
];
//crea un nuevo arreglo con todos los articulos
var articulosBaratos = articles.filter(function (objeto) {
  return objeto.nombre === "Compu";
});

//crae un arreglo nuevo : y obtiene sus propiedades
var nombreArticulos = articles.map(function (objeto) {
  return objeto.nombre;
  // return objeto.nombre === "vaso";
});

// craeo un arreglo nuevo : encuentra el primer objeto
var encuentraArticulo = articles.find(function(objeto){
  return objeto.nombre === "Compu";
});

//regresa los componentes
articles.forEach(function(objeto){
  console.log(objeto.nombre);
});

//booleano
var articulosCaros = articles.some(function(a){
  return a.costo >= 40000;
})