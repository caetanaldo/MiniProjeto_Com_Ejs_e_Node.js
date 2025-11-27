const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res)=>{
    
    const nome = 'Gustavo'
    res.render('index', {nome})
})

app.get('/produtos', (req, res)=>{

    const produtos = [
        { nome: 'Pizza', preco: 30 },
        { nome: 'Hambúrguer', preco: 25 },
        { nome: 'Suco', preco: 10 }
    ];
    res.render('produtos', {produtos})
})


app.get('/sobre', (req, res)=>{
    res.render('sobre', {titulo: 'Sobre o site'})
})

app.get('/promocao', (req, res)=>{

    const produtos = [
        { nome: 'Pizza', preco: 30, promocao: true },
        { nome: 'Hambúrguer', preco: 25, promocao: false },
        { nome: 'Suco', preco: 10, promocao: true }
    ];
    res.render('promocao', {titulo: 'Produtos em Promoção', produtos});

})















app.listen(3000, ()=>[
    console.log(`Servidor rodando em http://localhost:3000`)
])