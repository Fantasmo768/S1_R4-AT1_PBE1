const express = require('express'); //Constante importando a biblioteca express
const app = express(); //Instância do express, representa aplicação do servidor
const PORT = 8081; //Constante da porta do sercidor



app.get("/calculadora", (req, res) => { //URL do servidor
    
    //Constantes da rota do servidor
    const { operacoes, numUm, numDois } = req.query;
    let num1 = parseFloat(numUm);
    let num2 = parseFloat(numDois);

    let resultado = 0; //Variável do resultado

    try { 

        if (isNaN(num1) || isNaN(num2) || num1 == undefined || num2 == undefined) {
            return res.status(400).send("Você digitou um número de maneira correta");
        }

        switch (operacoes) {

            case "soma": //Caso a escolha seja soma
                resultado = num1 + num2;
                return res.status(200).send(`O resultado da sua soma é ${resultado}`);
                break;
            case "subtracao": //Caso a escolha seja subtração
                resultado = num1 - num2;
                return res.status(200).send(`O resultado da sua subtração é ${resultado}`);
                break;
            case "multiplicacao": //Caso a escolha seja multiplicação
                resultado = num1 * num2;
                return res.status(200).send(`O resultado da sua multiplicação (aproximando com 2 casas depois da vírgula) é ${resultado.toFixed(2)}`);
                break;
            case "divisao": //Caso a escolha seja divisão
                if (num2 == 0) { //Condição específica para divsão porque não é possível dividir por 0 
                    return res.status(400).send(`Não é possível dividir um número por 0`);
                }
                resultado = num1 / num2;
                return res.status(200).send(`O resultado da sua divisão (aproximando com 2 casas depois da vírgula) é ${resultado.toFixed(2)}`);
                break;
            default:
                return res.status(400).send(`Operação inválida`);
                break;
        }


    } catch (error) { //Caso de erro inesperado ele captura o erro e roda o que está em chaves
        res.status(500).send("Erro ao processar a requisição");
        console.error(error);
    }
})

//Abrindo servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})
