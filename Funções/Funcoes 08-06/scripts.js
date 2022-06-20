//3.Faça um programa, usando uma função que converta uma temperatura de Celsius para Fahrenheit.//

var Celsius = parseFloat(prompt("Digite a temperatura atual em Celsius: "));

var converta = (Celsius * 9/5) + 32;

console.log(converta);

function converta(Celsius,Fahrenheit){
    return Celsius + Fahrenheit;
}

//2.Faça um programa, usando uma função, para calcular a porcentagem de um número.//

var numero = parseFloat(prompt("Digite o número: "));

var porcentagem = (100*numero) /100;

console.log(porcentagem);

//1.Faça um programa, usando funções, que realize todas as operações básicas: soma, subtração, multiplicação, divisão.//
var n1 = parseInt(prompt("Digite o primeiro número: "));
var n2 = parseInt(prompt("Digite o segundo número: "));

console.log("Soma => " + soma(n1, n2));
console.log("Subtrai => " + subtrai(n1. n2));
console.log("Multiplica => " + multiplica(n1, n2));
console.log("Divide => " + divide(n1, n2));

function soma(numero1, numero2){
    return numero1 + numero2;
}

function subtrai(numero1, numero2){
    return numero1 - numero2;
}

function multiplica(numero1,numero2){
    return numero1 * numero2;
}

function divide(numero1, numero2){
    return numero1 / numero2;
}

