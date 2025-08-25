const express = require('express'); //Constante importando a biblioteca express
const app = express(); //Instância do express, representa aplicação do servidor
const PORT = 8081; //Constante da porta do sercidor



app.get("/calculadora", (req, res) => { //URL do servidor
    
    //Constantes da rota do servidor
    const { operacoes } = req.query
    const numUm = parseFloat(req.query.numUm)
    const numDois = parseFloat(req.query.numDois);

    let resultado = 0; //Variável do resultado

    try {

        if (isNaN(numUm) || isNaN(numDois) || numUm == undefined || numDois == undefined || operacoes == undefined) {
            return res.status(400).send("Você inseriu um valor de maneira incorreta");
        }

        if (operacoes == "soma") { //Soma

            resultado = parseFloat(numUm) + parseFloat(numDois);
            return res.status(200).send(`O resultado é ${resultado}`); //Mostrando resultados
        }


        if (operacoes == "subtracao") { //Subtração

            resultado = parseFloat(numUm) - parseFloat(numDois);
            return res.status(200).send(`O resultado é ${resultado}`); //Mostrando resultados
        }

        if (operacoes == "multiplicacao") { //Multiplicação
            resultado = parseFloat(numUm) * parseFloat(numDois);
            return res.status(200).send(`O resultado é ${resultado}`); //Mostrando resultados
        }

        if (operacoes == "divisao") { //Divisão
            if (numDois == 0) { //Checagem para ver se o número é 0
                return res.status(400).send("Não é possível dividir por 0 ou você inseriu um valor de maneira incorreta");
            }

            resultado = parseFloat(numUm) / parseFloat(numDois);

            return res.status(200).send(`O resultado é ${resultado}`); //Mostrando resultados
        }


    } catch (error) { //Caso de erro inesperado ele captura o erro e roda o que está em chaves
        res.status(500).send("Erro ao processar a requisição");
        console.error(error);
    }
})

//Abrindo servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT},`);
})
