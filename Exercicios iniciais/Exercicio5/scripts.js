//Construa um algoritmo que leia o nome de um aluno e três notas obtidas durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas.//

var nome= prompt("Digite o seu nome");

var nota= parseFloat(prompt("Digite sua primeira nota"));
var nota2= parseFloat(prompt("Digite sua segunda nota"));
var nota3= parseFloat(prompt("Digite sua terceira nota"));

var media= (nota + nota2 + nota3)/3;

alert("Sua nota final é: " + media);
