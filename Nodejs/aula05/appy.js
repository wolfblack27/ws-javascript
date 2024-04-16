const { json } = require("node:stream/consumers");
const path = require("path");
const caminho = path.resolve(__dirname, "teste.json");
const escreve = require('./modules/escrever')
const ler = require('./modules/ler'); // a função ler retorna uma prommise

//Escrever o arquivo
/*
const pessoas = [
    { nome: "Thiago" }, 
    { nome: "marisa" }, 
    { nome: "Fernanda" }
];
const jsonDado = JSON.stringify(pessoas,'',2)
escreve(caminho,jsonDado)

*/

async function lerArquivo(caminho){        //Quando retornamos de uma função assync
                                            //devemos usar o then na chamada dela
    const resposta = await ler(caminho) 
    return resposta

}

const dadosArquivo=lerArquivo(caminho).then((resposta)=>{
    return JSON.parse(resposta) 
}).then((resposta)=>{
    console.log(resposta)
});
