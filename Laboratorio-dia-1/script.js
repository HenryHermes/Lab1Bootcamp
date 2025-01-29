// Variables para los elementos del DOM
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiBtn = document.getElementById("multiplicar");
const divBtn = document.getElementById("dividir");
const resultado = document.getElementById("resultado");

// Función para para si no es un numero
function verificar() {
    let AreNumber = true
    if ((isNaN(parseFloat(numero1.value)) || isNaN(parseFloat(numero2.value)))){
        AreNumber = false
    }
    return AreNumber
}

// Función para sumar dos números
function sumar() {
    if (verificar()) {
        const suma = parseFloat(numero1.value) + parseFloat(numero2.value);
        resultado.textContent = `Resultado: ${suma}`;
    }else{
        resultado.textContent = "Existen entradas no numericas"
    }
    
}
// Función para restar dos números
function restar() {
    if (verificar()) {
        const resta = parseFloat(numero1.value) - parseFloat(numero2.value);
        resultado.textContent = `Resultado: ${resta}`;
    }else{
        resultado.textContent = "Existen entradas no numericas"
    }
    
}
// Función para multiplicar dos números
function multiplicar() {
    if (verificar()) {
        const multiplo = parseFloat(numero1.value) * parseFloat(numero2.value);
        resultado.textContent = `Resultado: ${multiplo}`;
    }else{
        resultado.textContent = "Existen entradas no numericas"
    }
    
}
// Función para dividir dos números
function dividir() {
    if (verificar()) {
        if (numero2.value != 0) {
            const dividendo = parseFloat(numero1.value) / parseFloat(numero2.value);
            resultado.textContent = `Resultado: ${dividendo}`;
        }else  {
            resultado.textContent = "No se puede dividir entre 0"
        }
    }else{
        resultado.textContent = "Existen entradas no numericas"
    }
    
    
}


// Event Listeners para botones
sumarBtn.addEventListener("click", sumar);
restarBtn.addEventListener("click", restar);
multiBtn.addEventListener("click", multiplicar);
divBtn.addEventListener("click", dividir);