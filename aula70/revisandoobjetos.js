/*
//Criando de forma literal
const pessoa2 = {
    nome:'Thiago',
    sobrenome:'Ventura',
    nomecompleto(){
        return this.nome + ' '+ this.sobrenome;
    }
}
*/


/*
//Podemos criar um objeto com a palavra reservada 'new'
const pessoa1 = new Object();
pessoa1.nome = 'Thiago';
pessoa1.sobrenome = 'Ventura';
pessoa1.nomecompleto = function(){
    return this.nome + ' '+ this.sobrenome;
};*/





/*
//Criando atraves da Factory Function
criarPessoas = function(nome,sobrenome){

    return { 
        nome,
        sobrenome,
        //usando get não podemos setar este metodo este atributo
        get nomecompleto(){
            return this.nome +" "+ this.sobrenome;

        }
    };
}
*/





/*
//Constructor Function
function Pessoa (nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomecompleto= function(){
        return this.nome + ' '+this.sobrenome;
    };

    //Object.freeze(this) // trava tudo que estiver acima dele
}

const p1 = new Pessoa('Thiago', "Ventura");
console.log(p1.nomecompleto());
p1.nome = 'outro';
Object.freeze(p1); // trava os atributos, não podem ser alterados
*/
