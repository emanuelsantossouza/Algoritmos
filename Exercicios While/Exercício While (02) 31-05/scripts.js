//2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).//

var MultiplosDeSete = 0;
var i = 1;
while(i <= 70) {
    if(i % 7 == 0) {
        MultiplosDeSete++;
    }
    i++;
} console.log("Quantidade de números multiplos de 7: " + MultiplosDeSete )
