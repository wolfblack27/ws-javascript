const criarPessoa = function(nome, sobrenome,idade){

    return {
        nome,
        sobrenome,
        idade
    }

    

};


pessoa1 = criarPessoa('Thiago','dos Santos',36)
console.log(pessoa1.idade)