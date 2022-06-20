//Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, infomar o seu nome, o salário fixo e salário no final do mês.//

var nome= prompt("Digite o seu nome: ");

var salário= parseFloat(prompt("Digite seu salário fixo: "));
var vendas= parseFloat(prompt("Seu total de vendas realizado em dinheiro: "));

var comissão= (vendas * 15/100);
var saláriofinal= (salario + comissão);

alert("Nome: " + nome + "Salário fixo: " + salário + "Salário + comissão: " + saláriofinal);
