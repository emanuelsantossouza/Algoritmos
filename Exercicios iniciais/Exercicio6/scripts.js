//O custo ao consumidor de um carro novo, é a soma do custo de fábrica com a porcentagem do revendedor e com o custo dos impostos (aplicandos ao custo de fábrica). Supondo que a porcentagem do revendedor seja de 25% do custo de fábrica e que os impostos custam 45% do custo de fábrica, faça um algoritmo que leia o valor de custo de fábrica e determine o preço final do automóvel (custo do consumidor).//

var fabrica= parseInt(prompt("Digite o custo de fábrica do automóvel"));

var impostos= (fabrica * 45/100);
var vendedor= (fabrica * 25/100);
var final= (impostos + vendedor + fabrica);

alert("O preço do automóvel somado aos impostos é: " + final);
