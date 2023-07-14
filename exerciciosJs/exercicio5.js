let prompt = require('prompt-sync') ()

let valorTotal = parseFloat(prompt("Informe o valor total da compra:"))

if(valorTotal <= 100) {
    console.log("sem desconto")
}

else if(valorTotal >100 == 200 ) {
    valorTotal = valorTotal *1.1
    console.log(`Parabéns! Voce recebeu um desconto de 10%, o total da sua compra é de R$:${valorTotal.toFixed(2)}`)
}

else if(valorTotal > 200){
    valorTotal = valorTotal *1.2
    console.log(`Parabéns! Voce recebeu um desconto de 20%, o total da sua compra é de R$:${valorTotal.toFixed(2)}`)
} 
