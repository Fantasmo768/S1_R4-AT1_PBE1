const express = require('express'); //Constante para importar a biblioteca express
const app = express(); //Constante que representa a instância do express e aplicação do servidor
const PORT = 8081; //Constante da porta do servidor

//Rota GET da saudação
app.get("/saudacao/:nome", (req, res) => {
    //Constante das rotas
    const nome = req.params.nome;
    const hora = parseInt(req.query.hora);
    
    try { //Tentar o código
        if (nome == undefined || hora == undefined || isNaN(hora) || !isNaN(nome)) { //Checagem de valores incorretos
            return res.status(400).send(`Você digitou números no seu nome, na hora ou esqueceu de inserir um valor`)
        }
        if (hora >= 6 && hora < 12) { //Checagem de bom dia
            return res.status(200).send(`Bom dia, ${nome}`)
        } else if (hora >= 12 && hora < 19) { //Checagem de boa tarde
            return res.status(200).send(`Boa tarde, ${nome}`)
        } else if (hora < 6 || (hora >= 19 && hora < 24)) { //Checagem de boa noite
            return res.status(200).send(`Boa noite, ${nome}`)
        } else {
            return res.status(400).send("Você inseriu a hora de maneira incorreta")
        }
    } catch (error) { //Caso algum erro inesperado aconteça
        console.error (error)
        return res.status(500).send("Erro ao processar a requisição")
    }
})

//Abrindo servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});