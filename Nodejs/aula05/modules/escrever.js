/*const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'..','teste.txt'); //resolve o caminho, o arqivo será salvo uma pasta superior a pasta modules, ou seja a pasta aula05
fs.writeFile(caminhoArquivo,'frase 01',{flag:'w',encoding:'utf-8'}); // a flag 'w' apaga e escreve tudo de novo, 'a' adiciona ao texto*/

const fs = require('fs').promises;

module.exports = (caminho,dado)=>{

    fs.writeFile(caminho,dado,{flag:'w',encoding:'utf-8'}); // a flag 'w' apaga e escreve tudo de novo, 'a' adiciona ao texto*/


}