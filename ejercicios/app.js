//EJERCICIO8
//Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWorld(){
    console.log("hello world!");
}
//====================================================================================================================//

//EJERCICIO9
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludarPersona(nombre){
    console.log('Hola '+ nombre);
}
//====================================================================================================================//
//EJERCICIO10
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function multiplicarNumero(numero){
    console.log(numero * 2);
}

//====================================================================================================================//
//EJERCICIO11
//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedioNumeros(num,num2,num3){
    prom = ((num + num2 + num3) / 3)
    console.log("El promedio es: " + prom);
}
//====================================================================================================================//
//EJERCICIO12
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function elMayorDeTodos(num1,num2){
    if (num1 > num2){
        console.log('el numero '+num1+' es mayor que ' + num2)
    }else{
        console.log('el numero '+num2+' es mayor que '+num1)
    }
}
//====================================================================================================================//
//EJERCICIO13
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicarNumero(num1){
    console.log(num1*num1);
}

//====================================================================================================================//
//EJERCICIO14
//Crea una función que calcule el índice de masa corporal 
//(IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
    let resultado = peso / (altura ** 2);
    if (resultado > 30) {
        console.log(`Su IMC es de ${resultado.toFixed(2)} (obesidad)`);
    } else if (resultado > 25.0) {
        console.log(`Su IMC es de ${resultado.toFixed(2)} (peso superior al normal)`);
    } else if (resultado >= 18.5) {
        console.log(`Su IMC es de ${resultado.toFixed(2)} (normal)`);
    } else if (resultado < 18.5) {
        console.log(`Su IMC es de ${resultado.toFixed(2)} (peso inferior al normal)`);
    }
}
//====================================================================================================================//
//EJERCICIO15
//Crea una función que calcule el valor del factorial de un número pasado como parámetro
function factorial(n) {
    if (n < 0){
        console.log("El factorial no funciona con valores negativos") ;
    } 
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    console.log(resultado);
}





helloWorld();
saludarPersona("Kevin");
multiplicarNumero(10);
promedioNumeros(9,10,15);
elMayorDeTodos(20,20)
multiplicarNumero(9);
calcularIMC(1.80,88)
factorial(5);
//====================================================================================================================//

