let numeroSecreto = generarNumeroSecreto();


let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //captura lo que el usuario escriba
    let numeroUsuario = document.getElementById(parseInt('valorUsuario')).value;
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(numeroUsuario);
    console.log(numeroUsuario == numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
    
}

asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');