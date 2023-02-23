const input = require('prompt-sync')({ sigint: true });
while(true){
    const pares = input('Quantos pares de sapato')
    const calcas = input('Quantas calcas')
    const camisas = input('quantas camisas')
    // sem funcao
    console.log('a combinacao deu '+parseInt(pares)*parseInt(calcas)*parseInt(camisas))
    // com funcao
    console.log(contagem_fundamental(pares, calcas, camisas))
    //lambda
    contagem = (pares, calcas, camisas) => pares*calcas*camisas
    console.log('a contagem deu ' +contagem(pares, calcas, camisas))
    
}   

function contagem_fundamental(pares, calcas, camisas){
    return 'a combinacao deu '+parseInt(pares)*parseInt(calcas)*parseInt(camisas);
}