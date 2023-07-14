//exercicio um

let prompt = require('prompt-sync') ()

let nome = prompt("Digite o nome de usuario")
let senha = prompt("Digite a senha de usuario")

if(nome = "admin" && senha == "senha 123") {
    console.log("Usuario admin permitido!")
}

else{
    console.log("Voce nao passara")
}