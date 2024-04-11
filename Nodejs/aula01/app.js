/* Importando variaveis e funções

//Modos:
//const mod1 = require('./mod1').falaNome; //Pega somente a função
//const {nome,sobrenome,falaNome} = require('./mod1') //Pega por meio da desestruturação do objeto
const mod1 = require('./mod1');

console.log(mod1.nome);
console.log(mod1.sobrenome);
console.log(mod1.falaNome());

/********************************************************************/



//Importando Classe:
const {Pessoa} = require('./mod1')
p1 = new Pessoa('Thiago');
console.log(p1.nome)



/********************************************************************/