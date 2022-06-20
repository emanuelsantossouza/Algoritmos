/*
    9) Elabore um algoritme que leia o ano de nascimento do 
       usuário e informe se ele pode ou não votar. 
       Faça uma pesquisa para descobrir os limites de idades 
       em que o voto deve ser proibido, obrigatório ou facultativo.
*/
var anoNascimento = parseInt(prompt("Digite o ano de nascimento"));

var idade = 2022 - anoNascimento;

if (idade >= 0 && idade <= 15){
    alert("Proibido votar");
} else if(idade >= 16 && idade <= 17) {
    alert("Voto facultativo");
} else if(idade >= 18 && idade <= 70) {
    alert("Voto obrigatório");
} else {
    alert("Voto facultativo");
}