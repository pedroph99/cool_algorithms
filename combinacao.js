const input = require('prompt-sync')({ sigint: true });


function funcao_combinacao(n, p){
    if(n>=p){
    var n_temp = 1
    if( n != 0){
    for(let i=1; i<=n; i++){
        n_temp = n_temp*i
        
    }}
    p_temp = 1
    if( p != 0){
    for(let i=1; i<=p; i++){
        p_temp = p_temp*i
        
    }}
    var k = n - p
    k_temp = 1
    if( k != 0){
    for(let i=1; i<=k; i++){
        k_temp = k_temp*i
        
    }}

    console.log('a combinacao é'+ n_temp/(p_temp*k_temp))
}
else{
    console.log('n não pode ser menor que p')
}
}


funcao_combinacao(4,3)

var combinacao = (n, p) => {
    if(n>=p){
        var n_temp = 1
        if( n != 0){
        for(let i=1; i<=n; i++){
            n_temp = n_temp*i
            
        }}
        p_temp = 1
        if( p != 0){
        for(let i=1; i<=p; i++){
            p_temp = p_temp*i
            
        }}
        var k = n - p
        k_temp = 1
        if( k != 0){
        for(let i=1; i<=k; i++){
            k_temp = k_temp*i
            
        }}
    
        return  n_temp/(p_temp*k_temp)
    }
    
}

const teste = combinacao(4,3)
console.log(teste)