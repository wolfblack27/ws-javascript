
/*
    
    function Pessoa(nome,sobrenome){

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = ()=> this.nome +" "+this.sobrenome;
        
    }
    Pessoa.prototype.estouFalando = 'Estou aqui';//Acrescenta metodo e propriedades a todos filhos
    Pessoa.prototype.falarFrase = (frase)=>{ return frase}
    const pessoa1 = new Pessoa('Thiago','Ventura');
    const pessoa2 = new Pessoa('Marisa','Ventura');
    console.dir(pessoa1);
    console.dir(pessoa2);
    
*/



/* Para um objeto é muito mais performatico que o metodo seja declarado
dentro do prototype*/
function Produto(nome,preco){
this.nome=nome;
this.preco=preco;
}

Produto.prototype.desconto = function(percentual){
console.log( this.preco* (1-(percentual/100)));
}

Produto.prototype.aumento = function(percentual){
    console.log( this.preco* (1+(percentual/100)));
}
const produto = new Produto('TV',1200);
produto.desconto(10);
produto.aumento(10);



//Aproveitando os metodos prototype em outros objetos(simples)
const p2 = {nome:'Celular',preco:800};//objeto de forma literal
Object.setPrototypeOf(p2,Produto.prototype); // dessa forma aplicamos no p2 o prototype 
p2.aumento(10);
p2.desconto(10);





//Criando um objeto a partir do Prototype
const p3 = Object.create(Produto.prototype,{
    nome:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:'Camiseta' 
    },
    preco:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:120
    },
    tamanho:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:'M'
    },
    
    
})


p3.aumento(10);
