const multiplicacao = require('./mod1'); // Para pastas utilizamos o (./) e ele aponta para pasta raiz. 
                                         //Agora ao utilizarmos (../) saimos da pasta um nivel, e todas as vezes que for utilizado ele sai um nivel

console.log(multiplicacao(2,2))
console.log(__filename); // nome do arquivo atual, absoluto
console.log(__dirname); // nome da pasta atual, absoluta

const path = require('path')// modulo nativo do node para ajudar a gerenciar o endereco


