const input = require('prompt-sync')({ sigint: true });


var alimentacao = 0

while(true){

    const valor = input('digite o valor')
    alimentacao = alimentacao + parseInt(valor)
    console.log(alimentacao)


}


