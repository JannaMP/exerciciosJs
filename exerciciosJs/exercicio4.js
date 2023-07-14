let prompt = require('prompt-sync') ()

let nascimento = prompt("Informe sua data de nascimento:")


if(nascimento > 2004) {
    console.log("Usuario maior de idade!")
}

else{
    console.log("Usuario nao e maior de idade")
}
