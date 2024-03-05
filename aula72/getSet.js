function Produto(nome,preco,estoque){

    this.nome = nome;
    this.preco  = preco;
    
    //Define quais comportamentos o atributo pode ter (no caso estoque)
    Object.defineProperty(this,'estoque', {
        enumerable:true, //mostra a chave
        configurable: true,//pode apagar a chave,pode reconfigurar a chave
        
        //não pode ser this.estoque
        get: function(){
            return estoque
        },
        //não pode ser this.estoque
        set:function(valor){
            if(typeof valor !== "number"){
                throw TypeError('MENSAGEM')
            }
            estoque = valor;
        }
    
    });
    

   
}

const produto1 = new Produto('TV',1200,3);
produto1.estoque = 45;
console.log(produto1);
console.log(produto1.estoque)
/*
const produto1 = new Produto('TV',1200,3);
const produto2 = new Produto('Celular',800,6);
const produtos = [];
produtos.push(produto1,produto2);

for(let produto of produtos){
    console.log(produto.nome);
}
*/