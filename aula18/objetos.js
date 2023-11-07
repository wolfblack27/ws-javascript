const criarPessoa = function(nome, sobrenome,idade){

    return{
        nome,
        sobrenome,
        idade,
    

    fala: function(){
        console.log("Estou falando " + this.nome)

    }

}
};


pessoa1 = criarPessoa('Thiago','dos Santos',36)
pessoa1.fala()
 