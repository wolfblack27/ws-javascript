const _velocidade = Symbol('velocidade'); // torna ela atributo privado de classe simbolica
class Carro{
    constructor(nome){
        this.nome =nome;
        this[_velocidade]=0; // deixa ela privada 
        //this.velocidade =0  //criação normal

    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(vel){
        this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade]>=100) return;
        this[_velocidade]++;
        //this.velocidade++; //acessa de forma normal

    }

    freiar(){
        if(this[_velocidade]>=0)return;
        this[_velocidade]--;
        //this.velocidade--;
    }


};

const carro = new Carro('Astras');
console.log(carro.velocidade);