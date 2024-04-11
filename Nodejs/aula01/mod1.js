/* Exportando variaveis e funções

const nome = "Thiago";
const sobrenome = "Ventura";

const falaNome = ()=>{
   return `${nome} ${sobrenome}`;

}

//Maneiras de se exportar:


//1
module.exports.nome = nome;

//2
exports.sobrenome = sobrenome;

//3
this.qualquerCoisa = 'qualquerCoisa';
this.falaNome = falaNome //Apenas passando sem executar

//console.log(module) //Como o objeto é enviado

************************************************************/




//Exportando classe:

class Pessoa{

    constructor(nome){
        this.nome = nome;
    }

}

/***************************************************************/