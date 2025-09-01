const express = require('express'); //Constante para importar a biblioteca express
const app = express(); //Constante que representa a instância do express e aplicação do servidor
const PORT = 8081; //Constante da porta do servidor

app.get("/ano/:ano", (req, res) => {
    const ano = parseInt(req.params.ano);

    try { //Tentar o código
        if (ano == undefined || isNaN(ano) || ano < 0) { //Checagem de possíveis erros
            return res.status(400).send("Você inseriu um número negativo, você esqueceu de inserir o valor ou digitou uma letra")
        }
        if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 100 == 0 && ano % 400 == 0)) { //Checagem de ano bissexto
            return res.status(200).send("O ano é bissexto")
        } else { //Caso a checagem de ano bissexto falhe ele só pode não ser bissexto
            return res.status(200).send("O ano não é bissexto")
        }


    } catch (error) { //Caso de erro inesperado ele captura o erro e roda o que está em chaves
        console.error (error)
        return res.status(500).send("Erro ao processar a requisição")
    }
})



//Abrindo o servidor
app.listen(PORT, () => {
    console.log(`Sevidor aberto em http://localhost:${PORT}`);
})