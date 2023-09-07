var marcas = ["Toyota", "Wokswagen", "Hyundai", "Tesla"];
var modelos = ["A", "B", "C", "D"];
var annios = [2003, 2022, 2019, 2018];
var autos = [];

//Funcion constructora
function Auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

for (var i = 0; i < marcas.length; i++) {
  autos.push(new Auto(marcas[i], modelos[i], annios[i]));
}

function showInfo() {
  for (var j = 0; j < autos.length; j++) {
    console.log(
      `Auto #${j}: ${autos[j].marca}  Modelo: ${autos[j].modelo}  Año: ${autos[j].annio}`
        // autos[j]
    );
  }
}