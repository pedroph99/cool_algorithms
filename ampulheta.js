
const inputs = require('readline')
const teste = inputs.createInterface({
    input: process.stdin,
    output: process.stdout
})
function cria_grid(height=null){
    if (height%2 === 0 || height === null){
        console.log('Número par')
    }
    else{
        posx = 0
        posy = 0
        const positions = gera_posicoes(height=height)
        console.log(positions)
        for(var x= 0; x<height; x++){

            var line_string =''
            for(var y =0; y<height; y++){
                if (x === 0 || x=== height-1){
                    line_string= line_string + '* '
                }
                else{
                    if(x===y){
                        
                        line_string= line_string+'* '
                    }
                    else if(x === positions[x][0] && y== positions[x][1]){
                        line_string= line_string+'* '
                    }
                
                else{
                    line_string= line_string+'  '
                }
                }
            }
            console.log(line_string)


        }
    }
}

function gera_posicoes(height){
    var positions = []
    var posicao_ultima = [0, height-1]
    
    for(var x = 0; x<height; x++){
        const new_pos = [0+x, height-1-x]
        positions.push(new_pos)
    }

    return positions
}

gera_posicoes(5)
teste.question('DIGITE UMA ALTURA IMPAR', function get_number(name){
    if(name%2 == 0){
        console.log('Não é impar')
    }
    else{
        cria_grid(height=name)
    }
})