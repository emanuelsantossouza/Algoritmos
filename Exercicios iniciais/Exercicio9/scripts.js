//Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e mostre a temperatura em Graus Celsius. Para isso pesquise a fórmula na Internet.//

var Fahrenheits= parseFloat(prompt("Digite a temperatura atual em Fahrenheits: "));

var conver= (Fahrenheits - 32) * 5/9;

alert("A temperatura atual em Graus Celsius é: " + conver + "Graus: ");
