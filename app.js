let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario(){
    console.log("Click");
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
    
}

asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');