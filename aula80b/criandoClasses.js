class Pessoa{

    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`Seja bem vindo (a): ${this.nome}`)
    }


    
    comer(){
        console.log(`${this.nome} esta comendo` )
    }


    
    beber(){
        console.log(` ${this.nome} esta bebendo`)
    }

}

