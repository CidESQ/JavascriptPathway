const h1 = document.querySelector("h1");
//NO SIRVEN
// const primerNumero = document.getElementsByClassName("numero1");
// const segundoNumero = document.getElementsByClassName("numero2");
const primerNumero = document.querySelector(".numero1");
const segundoNumero = document.querySelector(".numero2");
const botonCalcular = document.getElementById("calculo");
const p = document.querySelector("#result");

function btnOnClick(){
    const suma = Number(primerNumero.value) + Number(segundoNumero.value)
    p.innerText="Resultado: " + suma;
}