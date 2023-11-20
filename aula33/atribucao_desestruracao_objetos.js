const pessoa={
nome:'Thiago' ,
sobrenome : 'Miranda',
idade:30,
endereco:{
    rua: 'Primo Zacante',
    numero: 317
}

};


//Por desestruturacao: e podemos setar um valor padrao
//caso não encontre a chave dentro do objeto
const {nome ='Valor não encontrado',...resto} = pessoa
console.log(nome)
console.log(resto)
