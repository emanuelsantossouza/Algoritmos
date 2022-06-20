var ano = parseInt(prompt("Digite o ano"));

var anoEhBissexto = ano % 4 == 0

if (anoEhBissexto) {
    alert("Ano bissexto");
} else {
    alert("Ano não bissexto");
}