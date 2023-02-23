const input = require('prompt-sync')({ sigint: true });
function converte(temperatura, tipo, temp_index){
switch(tipo){
    case 1:
        switch(temp_index){
            case 2:
                new_temp = (temperatura -32)*5/9;
                console.log(new_temp)
                return new_temp;

            case 3:
                    new_temp = (temperatura -32)*5/9 + 273;
                    return new_temp;
        }
    case 2:
        switch(temp_index){
            case 1:
                new_temp = (temperatura )*9/5 +32;
                return new_temp;
             case 3:
                    new_temp = (temperatura )+273;
                    return new_temp;
        }
    case 3:
        switch(temp_index){
            case 2:
                new_temp = (temperatura -273);
                return new_temp;
            case 1:
                    new_temp = (temperatura -273) * 9/5 +32;
                    return new_temp;
        }
}
}

while(true){
    const temperatura_pam = input('Digite a temperatura')
    var tipo = input('digite o tipo: 1 para fareheit, 2 para celsius e 3 para kelvin')
    while(parseInt(tipo) != 1 && parseInt(tipo) != 2  && parseInt(tipo) != 3){
        console.log('Digite 1 2 ou 3')
        tipo = input('digite o tipo: 1 para fareheit, 2 para celsius e 3 para kelvin')
    }
    var temp_index = input('digite para qual medida quer converter. 1 para fareheit, 2 para celsius e 3 para kelvin')
    while(parseInt(temp_index) != 1 && parseInt(temp_index) != 2  && parseInt(temp_index) != 3){
        console.log('Digite 1 2 ou 3')
        temp_index = input('digite o tipo: 1 para fareheit, 2 para celsius e 3 para kelvin')
    }
    console.log(' a temperatura nova é ' +converte(parseInt(temperatura_pam), parseInt(tipo), parseInt(temp_index)))
}   
