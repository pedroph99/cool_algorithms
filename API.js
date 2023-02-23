
const express = require('express')
const bp = require("body-parser")
const joi = require('joi')
const app = express()


var fake_db  = [
    {"id": 1, "serie": 9, "turma": 'c', "nome": "pedrinho louco"},
    {"id": 2, "serie": 9, "turma": 'b', "nome": "rodrigo"},
    {"id": 3, "serie": 9, "turma": 'a', "nome": "flavio"},
    {"id": 4, "serie": 9, "turma": 'd', "nome": "natan"},
    {"id": 5, "serie": 7, "turma": 'c', "nome": "marcio"},
    {"id": 5, "serie": 7, "turma": 'c', "nome": "marcio araujo"},
    {"id": 6, "serie": 8, "turma": 'e', "nome": "thiago"},
]
//first webpage
var jsonparser = bp.json()
app.use(express.json())
// The first parameter is the route of the website. The second one is a callback that will handle the HTTP request
app.get('/api/getlist/:nome',  (req, res) =>
{
   
        console.log(req.params.nome)
        const validador = joi.string().regex( new RegExp('^[a-zA-Z]{3,30}$'))
        const resultado = validador.validate(req.params.nome)
        if (resultado.error){
            res.status(404).send('Parametro inválido. Utilize uma string entre 30 e 3 caracteres')
        }
        else{
            var objetos = []
            for(x=0; x<fake_db.length; x++){
                console.log('testando for loop')
                console.log(req.params.nome)
                if (fake_db[x].nome.match(`${req.params.nome}`)){
                    console.log('ok')
                    objetos.push(fake_db[x])
                }


            }
            res.send(objetos)
            console.log(objetos)
        }
        
    
    })

app.post('/api/getlist', (req, res) => {
    console.log('POST request realizada')

    const requisicao = req.body.name
    console.log(requisicao)
    lista_users.push(requisicao)
    res.send(lista_users)
})

app.listen(3000, () => console.log('okk'))