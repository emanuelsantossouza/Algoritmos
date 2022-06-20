//Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (U$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.//

var preço= parseFloat(prompt("Digite a cotação do dólar atual: "));
var quantidade= parseFloat(prompt("Valor em dólar com você: "));

var conversão= (preço + quantidade);

alert("Você tem: " + conversão + "R$");
