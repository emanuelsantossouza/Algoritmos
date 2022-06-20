// 7) Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem decrescente. 

valor1 = parseInt(prompt("Digite o primeiro valor: "));
valor2 = parseInt(prompt("Digite o segundo valor: "));
valor3 = parseInt(prompt("Digite o terceiro valor: "));

if (valor1 < valor2  && valor1 < valor3) {
    alert("Ordem decrescente: " + valor1 + " < " + valor2 + " < " + valor3);
} else if (valor2 < valor1 && valor2 < valor3) {
    alert("Ordem decrescente: " + valor2 + " < " + valor1 + " < " + valor3);
} else if (valor3 < valor1 && valor3 < valor2) {
    alert("Ordem Decrescente: " + valor3 + " < " + valor2 + " < " + valor1);
}