let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

// Mostrar el número secreto en la consola (solo para propósitos de prueba)
console.log(numeroSecreto);

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para verificar el intento del usuario
function verificarIntento(){
    // Captura el valor ingresado por el usuario
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    // Verifica si el número ingresado es igual al número secreto
    if (numeroUsuario === numeroSecreto) {
        // Usuario acertó el número
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        // Habilitar el botón de reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Usuario no acertó el número
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        // Incrementar el contador de intentos
        intentos++;
        // Limpiar la caja de entrada
        limpiarCaja();
    }
}

// Función para limpiar la caja de entrada
function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

// Función para generar un número secreto aleatorio entre 1 y 10
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función para establecer las condiciones iniciales del juego
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto(); // Generar un nuevo número secreto
    intentos = 1; // Reiniciar el contador de intentos
    // Deshabilitar el botón de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    limpiarCaja(); // Limpiar la caja de entrada
}

// Función para reiniciar el juego
function reiniciarJuego(){
    condicionesIniciales(); // Establecer las condiciones iniciales
}

// Añadir eventos a los botones de verificación y reinicio
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);
document.getElementById('verificar').addEventListener('click', verificarIntento);

// Establecer las condiciones iniciales al cargar la página
condicionesIniciales();
