const input = require('prompt-sync')({ sigint: true });
var array_temp = []

function order(array, pula_de_quantos){
   var  new_array = []
    for(var i = 0; i<array.length; i++){
        var  temp_var = 0;
        var times = 1
        if(i+ pula_de_quantos > (array.length-1)){
        while (i + pula_de_quantos > array.length-1){
            temp_var = i + pula_de_quantos - (array.length)*times
            times = times+1
            console.log('tupo')
            
            if (temp_var <= array.length-1){
                break
            }
        }   }
        else{
            temp_var = i + pula_de_quantos
        }
        console.log(temp_var)
        new_array[temp_var] = array[i]
        console.log('peocessando')
        console.log(new_array)
            }
        console.log('ok')
        console.log(new_array)
}
while(true){
    
    const new_element = input('selecione um novo elemento para colocar no array')
    if(new_element == 's'){
        break
    }
    array_temp.push(new_element)


}

console.log(array_temp)
order(array_temp, 1)