/* 
   4) Elaborar um algoritmo que lê 2 valores a e b e 
      os escreve com a mensagem: "São múltiplos" ou 
      "Não são múltiplos".
*/
var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o valor de B"));

if (a % b == 0) {
    alert("São múltiplos");
} else {
    alert("Não são múltiplos");
}