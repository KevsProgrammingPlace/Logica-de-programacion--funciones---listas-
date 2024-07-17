
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){
    console.log("Click");
}
asignarTextoElemento('h1','juego del numero secreto');