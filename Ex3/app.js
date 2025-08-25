const express = require('express'); //Constante para importar a biblioteca do express
const app = express(); //Constante de instância do express, representa aplicação do servidor
const PORT = 8081; //Constante da porta do servidor

//Rota GET das operações
app.get("/operacao/:tipo", (req, res) => {

    //Constantes de PATH e QUERY
    const { tipo } = req.params;
    const numUm = parseFloat(req.query.numUm);
    const numDois = parseFloat(req.query.numDois);
    let resultado; //Váriavel de resultados

    try { //Tentar o código

        //Condição de checagem de erros
        if (numDois == undefined || numUm == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send("Você pode ter esquecido de digitar um valor ou inseriu algum valor de maneira incorreta ou escreveu uma letra ao invés de um número");
        }

        //Condição para caso seja escolhida a soma
        if (tipo == "soma") {
            resultado = numUm + numDois;
            return res.status(200).send(`O resultado da sua soma é ${resultado}`);
        }

        //Condição para caso seja escolhida a subtração
        if (tipo == "subtracao") {
            resultado = numUm - numDois;
            return res.status(200).send(`O resultado da sua subtração é ${resultado}`);
        }

        //Condição para caso seja escolhida a multiplicação
        if (tipo == "multiplicacao") {
            resultado = numUm * numDois;
            return res.status(200).send(`O resultado da sua multiplicação é ${resultado}`);
        }

        //Condição para caso seja escolhida a divisão
        if (tipo == "divisao") {
            if (numDois == 0) { //Condição específica para divsão porque não é possível dividir por 0 
                return res.status(400).send(`Não é possível dividir um número por 0`);
            }
            resultado = numUm / numDois;
            return res.status(200).send(`O resultado da sua divisão é ${resultado}`);
        }
    } catch (error) { //Caso de erro inesperado ele captura o erro e roda o que está em chaves
        console.error(error);
        return res.status(500).send(`Erro ao processar a requisição`);
    }
});

app.listen(PORT, () => { //Abrindo o servidor
    console.log(`Sevidor rodando na porta http://localhost:${PORT}`)
});