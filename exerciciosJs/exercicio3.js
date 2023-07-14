let prompt = require('prompt-sync') ()

let primeiroNumero = parseInt(prompt("Informe o primeiro numero:"))
let segundoNumero  = parseInt(prompt("Informe o segundo numero:"))
let terceiroNumero = parseInt(prompt("Informe o terceiro numero:"))

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
    console.log("Os numeros estao em ordem crescente")
}
else{
    console.log("O numeros nao estao em ordem crescente")
}



