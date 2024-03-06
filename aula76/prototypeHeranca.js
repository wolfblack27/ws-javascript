// Herança com Prototype: 
/* neste exemplo vamos abstrair produto e especializar com camiseta*/

function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento=function(percentual){
    return (this.preco * (1+(percentual/100))).toFixed(2);
}

Produto.prototype.desconto=function(percentual){
    return (this.preco * (1-(percentual/100))).toFixed(2);
}




//Criamos camiseta como uma especialização de produto com atributo e metodo proprio
function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco); //chama o construtor de produto para aproveitar os atributos herdados
    this.cor = cor; //setando atributo proprio
}
Camiseta.prototype = Object.create(Produto.prototype); //criamos um objeto e passamos o mesmo prototype de produto
Camiseta.prototype.constructor = Camiseta;

//Criando funcao 
Camiseta.prototype.mostrarCor = function(){
    return `A cor da camiseta ${this.cor}`
}
const camiseta = new Camiseta('camiseta',12,'preta');
console.log(camiseta);
console.log(camiseta.mostrarCor());