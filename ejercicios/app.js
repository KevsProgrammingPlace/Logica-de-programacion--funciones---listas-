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
helloWorld();
saludarPersona("Kevin");
multiplicarNumero(10);
promedioNumeros(9,10,15);
elMayorDeTodos(20,20)
multiplicarNumero(9);