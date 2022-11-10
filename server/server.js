const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../server/models/database');

app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

// Rota para registrar no banco de dados
app.post("/register",  (req, res) => {
    const registerUser = {
        email: req.body.email,
        password: req.body.password
    }

    db.insert(registerUser).into("users").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
})

// Rota de login do usuário
app.post("/login", (req,res) => {
    const getUser = {
        email: req.body.email,
        password: req.body.password
    }

})



