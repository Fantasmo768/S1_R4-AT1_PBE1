const express = require('express'); //Constante importando a biblioteca express
const app = express(); //Instância do express, representa aplicação do servidor
const PORT = 8081; //Porta do servidor


//Rota GET soma
app.get("/soma/:numUm/:numDois", (req, res) => {

    //Constantes dos números da url
    const numUm= parseFloat(req.params.numUm);  
    const numDois = parseFloat(req.params.numDois);

    const resultado = parseFloat(numUm) + parseFloat(numDois) //Constante de resultado
    try { //Ele vai tentar o código
        if (isNaN(numUm) || isNaN(numDois)) { //Checagem de valores corretos
            return res.status(400).send("Você inseriu algum valor de maneira incorreta");
        }
        res.status(200).send(`A soma é ${resultado}`) //Mostrando resultados
    } catch (error) { //Caso de erro inesperado ele captura o erro e roda o que está em chaves
        return res.status(500).send("Erro ao processar a requisição")
    }
})


//Rota GET subtração
app.get("/subtracao/:numUm/:numDois", (req, res) => {

    const {numUm, numDois} = req.params; //Constantes dos números da url
    const resultado = parseFloat(numUm) - parseFloat(numDois); //Constante de resultado
    try {
        if (isNaN(numUm) || isNaN(numDois)) { //Checagem de valores corretos
            return res.status(400).send("Você inseriu algum valor de maneira incorreta"); 
        }
        res.status(200).send(`A subtração é ${resultado}`); //Mostrando resultados
    } catch (error) { //Caso erro do servidor
        return res.status(500).send("Erro ao processar a requisição");
    }
})


//Rota GET multiplicação
app.get("/multiplicacao/:numUm/:numDois", (req, res) => {

    const {numUm, numDois} = req.params; //Constantes dos números da url
    const resultado = parseFloat(numUm) * parseFloat(numDois); //Constante de resultado
    try {
        if (isNaN(numUm) || isNaN(numDois)) { //Checagem de valores corretos
            return res.status(400).send("Você inseriu algum valor de maneira incorreta"); 
        }
        res.status(200).send(`A multiplicação é ${resultado}`); //mostrando resultados
    } catch (error) { //Caso erro do servidor
        return res.status(500).send("Erro ao processar a requisição");
    }
})


//Rota GET divisão
app.get("/divisao/:numUm/:numDois", (req, res) => {

    //Declarando constantes
    const {numUm, numDois} = req.params; //Constantes dos números da url
    const resultado = parseFloat(numUm) / parseFloat(numDois); //Constantes da resultados
    try {
        if (isNaN(numUm) || isNaN(numDois) || numDois == 0) { //Checagem de valores corretos
            return res.status(400).send("Você inseriu algum valor de maneira incorreta");
        }
        res.status(200).send(`A divisão é ${resultado}`); //Mostrando resultados
    } catch (error) { //Caso erro do servidor
        console.error(error);
        return res.status(500).send("Erro ao processar a requisição");
    }
})


//Abrindo servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})

