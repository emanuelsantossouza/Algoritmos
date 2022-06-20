//3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.//

var inicio = parseInt(prompt("Digite o início do intervalo"))
var fim = parseInt(prompt("Digite o fim do intervalo"))

var QuantidadePares = 0;
var QuantidadeImpares = 0;

var i = inicio;
while(i <= fim) {
    if(i % 2 == 0){
        QuantidadePares++;
    } else{
        QuantidadeImpares++;
    }
    i++;
}
console.log("Quantidade de números pares: " + QuantidadePares);
console.log("Quantidade de números ímpares: " + QuantidadeImpares);
