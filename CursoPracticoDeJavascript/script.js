const tituloH1 = document.querySelector("h1");
const primerParrafo = document.querySelectorAll("p");
const segundoParrafo = document.querySelector(".segundoParrafo");
const tercerParrafo = document.getElementById("tercerParrafo");
const input = document.querySelector("input");

// tituloH1.innerHTML = "Nuevo titulo <br> con subtitulo"
tituloH1.innerText = "Nuevo titulo <br> con subtitulo";

// console.log(tituloH1.getAttribute("pantalla"));
// tituloH1.setAttribute("pantalla", "LG");
// console.log(tituloH1.getAttribute("pantalla"));

// segundoParrafo.classList.add("2Parrafo");
// segundoParrafo.classList.remove("segundoParrafo");

// console.log({
//   tituloH1,
//   primerParrafo,
//   segundoParrafo,
//   tercerParrafo,
//   input,
// });
// console.log(input.value)

// input.setAttribute("value", "Hola");
// input.value = "Adios";s

const imagen = document.createElement("img");
imagen.setAttribute("src", "../3840x2160.jpg");
imagen.setAttribute("alt", "background");
console.log(imagen);

tercerParrafo.append(imagen);
tercerParrafo.removeChild(imagen);
