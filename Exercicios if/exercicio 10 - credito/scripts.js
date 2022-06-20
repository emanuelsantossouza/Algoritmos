/*
   10) Um banco concederá um crédito especial aos seus clientes,
       variável com o saldo médio no último ano. 
       Faça um algoritmo que leia o saldo médio de um cliente 
       e calcule o valor do crédito de acordo com a tabela abaixo. 
       Mostre uma mensagem informando o saldo médio e o valor do crédito.
        De 0 a 200   --> Nenhum crédito
        De 201 a 400 --> 20% do valor do saldo médio
        De 401 a 600 --> 30% do valor do saldo médio
        Acima de 600 --> 40% do valor do saldo médio
*/
var saldoMedio = parseFloat(prompt("Digite o saldo medio"));

var valorCredito = 0;

if (saldoMedio >= 0 && saldoMedio <= 200){
    valorCredito = 0;
} else if(saldoMedio >= 201 && saldoMedio <= 400) {
    valorCredito = saldoMedio * 0.2;
} else if(saldoMedio >= 401 && saldoMedio <= 600) {
    valorCredito = saldoMedio * 0.3;
} else {
    valorCredito = saldoMedio * 0.4;
}

alert("Valor de crédito é: " + valorCredito);