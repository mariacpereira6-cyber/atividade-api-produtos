const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json([
        {
            nome: "Computador",
            categoria: "Eletrônicos",
            preco: 2000
        },
        {
            nome: "Celular",
            categoria: "Eletrônicos",
            preco: 1800
        },
        {
            nome: "Geladeira Smart",
            categoria: "Eletrodomésticos",
            preco: 20000
        }
    ]);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});