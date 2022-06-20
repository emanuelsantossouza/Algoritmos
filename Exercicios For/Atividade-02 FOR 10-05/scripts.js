var tabuada = prompt("Digite qual tabuada você quer")
var maximo = prompt("Digite o máximo da sua tabuada")

for(let i = 0; i <= maximo; i++){
    let conta = tabuada + "=" + i;
    let resultado = tabuada * i;
    console.log(conta + "=" + resultado);
   
}