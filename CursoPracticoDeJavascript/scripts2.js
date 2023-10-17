const h1 = document.querySelector("h1");
const formulario = document.querySelector("#formulario")
const primerNumero = document.querySelector("#numero1");
const segundoNumero = document.querySelector("#numero2");
const botonCalcular = document.querySelector("#calculo");
const p = document.querySelector("#resultado");


formulario.addEventListener('submit', sumarInputValue);

function sumarInputValue(event) {
    event.preventDefault();
    // Convierte los valores de los campos en números
    const numero1 = parseFloat(primerNumero.value);
    const numero2 = parseFloat(segundoNumero.value);
    
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const suma = numero1 + numero2;
        p.innerText = "Resultado: " + suma;
    } else {
        p.innerText = "Ingresa números válidos en ambos campos.";
    }
}
