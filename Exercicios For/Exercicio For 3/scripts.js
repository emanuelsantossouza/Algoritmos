/*Faça um algoritmo que imprima a quantidade de números pares e a quantidade de 
números ímpares em um intervalo digitado pelo usuário.*/

var inicio = parseInt(prompt("Digite o inicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));

var quantidadePares = 0
var quantidadeImpares = 0 

for (var i = inicio; i <= fim; i++) {
    if(i % 2 == 0) {
        quantidadePares++;
        
    } else {
        quantidadeImpares++;
    }
}
console.log("Quantidade de pares: " + quantidadePares);
console.log("Quantidade de ímpares: " + quantidadeImpares);
