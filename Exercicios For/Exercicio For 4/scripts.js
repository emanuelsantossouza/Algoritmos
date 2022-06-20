//Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário//

var inicio = parseInt(prompt("Digite o inicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));

var somaMultiplosOnze = 0
for (var i = inicio; i <= fim; i++) {
    if (i % 11 == 0) {
        somaMultiplosOnze = somaMultiplosOnze + i;
    }
}
console.log("A soma é: " + somaMultiplosOnze);
