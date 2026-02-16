Esse código cria um servidor web usando o framework Express, define três rotas GET que retornam mensagens diferentes e inicia a aplicação na porta 4000 para receber requisições no navegador



const express = require("express"); //importando o express
const app = express(); // iniciando o express


app.get("/",function(req,res) {
    res.send('<h1>Bem vindo oa futuro, o seu futuro</h1>')
});

app.get("/blog/",function(req,res){
        res.send('la vida es vivida')
})

app.get("/blog/:empresa",function(req,res){
    let empresa = req.params.empresa
        res.send('<h2> empresa ' + empresa + '</h2>')
})

app.get('/canal/youtube',function(req,res){
    res.send('Bem vindo ao meu canal galerinha!!!')
})

app.listen(4000,function(erro) {
    if(erro){
        console.log("Ocorreu um erro!")
    }else {
        console.log('servido iniciado com suscesso!')
    }
})

