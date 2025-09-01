const express = require('express'); //Constante importando a bilbioteca express
const app = express(); //Instância do express que representa a aplicação do servidor
const PORT = 8081; //Porta do servidor

//Rota GET para acessar a calculadora de IMC
app.get("/imc", (req, res) => {

    //Constantes da rota
    const {altura, peso} = req.query;
    
    //Convertendo valores em float
    alturaFloat = parseFloat(altura);
    pesoFloat = parseFloat(peso);

    let imc = pesoFloat / (alturaFloat * alturaFloat); //Váriavel de cálculo do imc

    try { //Tentar o código
        if (alturaFloat == undefined || isNaN(alturaFloat) || pesoFloat == undefined || isNaN(pesoFloat)) { //Checagem de erros do usuário
            return res.status(400).send("Você digitou alguma letra, ou esqueceu de digitar algum número")
        }
        if (imc < 18.5) { //Checagem de imc abaixo do peso
            return res.status(200).send(`Seu imc é ${imc.toFixed(2)}. Você está abaixo do peso`);
        } else if (imc >= 18.5 && imc < 25) { //Checagem de imc no peso normal
            return res.status(200).send(`Seu imc é ${imc.toFixed(2)}. Você está com o peso normal`);
        } else if (imc >= 25 && imc < 30) { //Checagem de imc acima do peso
            return res.status(200).send(`Seu imc é ${imc.toFixed(2)}. Você está acicma do peso`);
        } else { //Caso ele não seja nenhuma das anteriores ele só pode ser obeso
            return res.status(200).send(`Seu imc é ${imc.toFixed(2)}. Você está obeso`);
        }

    } catch (error) { //Capturar o erro
        console.error(error)
        return res.status(500).send("Erro ao processar a requisição")
    }



})

//Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}, peso em quilos e altura em metros, ou peso em gramas e altura em centímetros`);
})