var nota1 = parseFloat(prompt("Digite a primeira nota"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var nota3 = parseFloat(prompt("Digite a terceira nota"));
               
var peso1 = 4;
var peso2 = 3;
var peso3 = 3;

var mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

if (mediaPonderada >= 7) {
    alert("A média foi: " + mediaPonderada + ", e você foi Aprovado(a)");
} else if(mediaPonderada >= 5 && mediaPonderada <= 6.9) {
    alert("A média foi: " + mediaPonderada + ", e você está de Recuperação");
} else {
    alert("A média foi: " + mediaPonderada + ", e você foi Reprovado(a)");
}