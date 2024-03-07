//Factory Function
// 1 modo: onde estamos definindo as funções dentro do escopo pessoa
/*
function criaPessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    const pessoaPrototype = {
        falar(){console.log(`Seja Bem-Vindo: ${this.nome}`)},
        comer(){console.log(` ${this.nome} está comendo`)},
       
        
    };
    
    return Object.create(pessoaPrototype,{
        nome:{value:this.nome},
        sobrenome:{value:this.sobrenome}

    });

};
*/


//2 modo vamos desacoplar as funções do escopo (objeto pessoa)

//Funções fora do escopo criaPessoa
const falar={
    falar(){
        console.log(`Seja Bem-Vindo: ${this.nome}`);
    }
};

const comer={
    comer(){
        console.log(`${this.nome} está comendo`);
    }
}


function criaPessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    const pessoaPrototype = Object.assign({},falar,comer);
    
    return Object.create(pessoaPrototype,{
        nome:{value:this.nome},
        sobrenome:{value:this.sobrenome}

    });

};


const p1 = criaPessoa('Thiago','Ventura');
console.log(p1.comer());