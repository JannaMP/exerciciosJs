//exercicio dois

let prompt = require('prompt-sync') ()

let numero = parseInt(prompt("informe um numero de 1 a 7:"))


switch (numero) {
    case "1":
        console.log("O numero corresponde a segunda-feira")
        break;
    case "2":
        console.log("O numero corresponde a terceira-feira")
        break;
    case "3":
        console.log("O numero corresponde a quarta-feira")
        break;
    case "4":
        console.log("O numero corresponde a quinta-feira")
        break;
    case "5":
        console.log("O numero corresponde a sexta-feira")
        break;
    case "6":
        console.log("O numero corresponde a sabado")
        break;
    case "7":
        console.log("O numero corresponde a sabado")
        break;

    default:
        console.log("O valor digitado nao corresponde a um dia da semana")
        break;
}

