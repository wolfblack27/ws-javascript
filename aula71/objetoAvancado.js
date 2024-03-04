function Produto(nome,preco,estoque){

    this.nome = nome;
    this.preco  = preco;
    this.estoque =estoque;
    //Define quais comportamentos o atributo pode ter (no caso estoque)
    Object.defineProperty(this,'estoque', {
        enumerable:true, //mostra a chave
        value: estoque,//valor da chave
        writable: true,//pode alterar o valor
        configurable: true//pode apagar a chave,pode reconfigurar a chave
    });

    /*Feita de forma similar do objectProperty
     com a diferenca que cada atributo recebe um objeto com
     as configurações*/
    Object.defineProperties(this,{
        nome:{
            enumerable:true, //mostra a chave
            value: estoque,//valor da chave
            writable: true,//pode alterar o valor
            configurable: true//pode apagar a chave,pode reconfigurar a chave
        },
        preco:{
            enumerable:true, //mostra a chave
            value: estoque,//valor da chave
            writable: true,//pode alterar o valor
            configurable: true//pode apagar a chave,pode reconfigurar a chave
        }
    });

}

const produto1 = new Produto('Camiseta','20',3);
console.log(produto1);
console.log(Object.keys(produto1)); // mostra os atributos no objeto