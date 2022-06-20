var n1 = parseInt(prompt("Digite o primeiro número"));
var n2 = parseInt(prompt("Digite o segundo número"));
var n3 = parseInt(prompt("Digite o terceiro número"));

if (n1 <= n2 && n2 <= n3){
    alert("A ordem crescente:" + n1 + " - " + n2 + " - " + n3);
} else if (n1 <= n3 && n3 <= n2) {
    alert("A ordem crescente:" + n1 + " - " + n3 + " - " + n2);
} else if (n2 <= n1 && n1 <= n3){
    alert("A ordem crescente:" + n2 + " - " + n1 + " - " + n3);
} else if (n2 <= n3 && n3 <= n1) {
    alert("A ordem crescente:" + n2 + " - " + n3 + " - " + n1);
} else if (n3 <= n1 && n1 <= n2) {
    alert("A ordem crescente:" + n3 + " - " + n1 + " - " + n2);
} else {
    alert("A ordem crescente:" + n3 + " - " + n2 + " - " + n1);
}
