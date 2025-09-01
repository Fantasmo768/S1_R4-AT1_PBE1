const express = require('express'); //Constante para importar a biblioteca do express
const app = express(); //Constante de instância do express, representa aplicação do servidor
const PORT = 8081; //Constante da porta do servidor

//Rota GET das operações
app.get("/operacao/:tipo", (req, res) => {

    //Constantes de PATH e QUERY
    const { tipo } = req.params;
    const { numUm, numDois } = req.query;

    //Transformando em números
    let num1 = parseFloat(numUm)
    let num2 = parseFloat(numDois);
    let resultado; //Váriavel de resultados

    try { //Tentar o código

        //Condição de checagem de erros
        if (num2 == undefined || num1 == undefined || isNaN(num1) || isNaN(num2)) {
            return res.status(400).send("Você digitou um número de maneira inválida");
        }

        //Condição para caso seja escolhida a soma
        switch (tipo) {

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
                return res.status(200).send(`O resultado da sua divisão é (aproximando com 2 casas depois da vírgula) ${resultado.toFixed(2)}`);
                break;
            default:
                return res.status(400).send(`Operação inválida`);
                break;
        }
    } catch (error) { //Caso de erro inesperado ele captura o erro e roda o que está em chaves
        console.error(error);
        return res.status(500).send(`Erro ao processar a requisição`);
    }
});

 //Abrindo o servidor
app.listen(PORT, () => {
    console.log(`Sevidor rodando na porta http://localhost:${PORT}`)
});