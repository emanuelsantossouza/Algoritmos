var inicio = parseInt(prompt("Digite o ínicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));

var somaMultiplosOnze = 0;
var i = inicio;
while(i <= fim) {
    if(i % 11 == 0) {
        somaMultiplosOnze += i;
    }
    i++;
}
console.log("Soma dos números multiplos de 11: " + somaMultiplosOnze);
