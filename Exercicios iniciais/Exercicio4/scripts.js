//Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consórcio e o saldo devedor.//

var prestação= parseInt(prompt("Digite o total de prestações: "));
var pagas= parseInt(prompt("Digite a quantidade de prestações pagas: "));
var valor= parseInt(prompt("Digite o valor atual das prestações"));

var pago= (valor * pagas);
var restante= (prestação - pagas) * valor;

alert("Total pago até o momento: " + pago);
alert("Valor restante a pagar: " + restante);
