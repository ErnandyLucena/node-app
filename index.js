const express = require("express")
const app = express();

app.set('view engine','ejs');

app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.40}
    ]

    res.render("index",{
        nome: nome,
        lang:lang,
        empresa: "guia do programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080,() =>{
    console.log("app rodando");
});