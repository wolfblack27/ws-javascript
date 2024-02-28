// map faz um mapeamento afim de alterar os valores do array ou manter, mas de fato ele acessa e retorna valores, sem modificar o original 
//(exeto quando se adiociona uma nova chave exemplo 3)
// e assim como o filter ela tambem passa os parametros (valor,indice, array)

/*
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
//obtendo o dobro de cada elemento do array
const numerosDobro = numeros.map((valor)=>{
    return valor *2;
});
console.log(numerosDobro);
*/







/*Exemplos de MAP aplicado aos objetos:
1 - retorne apenas uma string com o nome da pessoa
2 - remova apenas a chave nome do objeto
3 - adicione uma chava ID em cada objeto
4 - ordenar o array de objetos
* */

const pessoas = [
                    {nome:'Thiago',idade:62},
                    {nome:'Junior',idade:23},
                    {nome:'David',idade:55},
                    {nome:'Nina',idade:19},
                    {nome:'Marisa',idade:32},
                    {nome:'Fernanda',idade:47},

                ]

//1:  apenas uma string com o nome das pessoas
const apenasUmaString = pessoas.map((valor)=>{

    return valor.nome;
})
console.log('Apenas a chave nome',apenasUmaString);









//2:  apenas a chave nome do objeto
const apenasChaveNome = pessoas.map((valor)=>{
    
    //- primeira maneira
    delete valor.nome; //remova a chave nome do objeto 
    //return valor;
    
    // - segunda maneira
    return{idade:valor.idade}

})
console.log('apenas chave idade',apenasChaveNome);








/*
//3 - A:  adicione uma chava ID em cada objeto: dessa forma ele altera o original
const adionadoID = pessoas.map((valor,indice)=>{
    valor.id = indice
    return valor;
})
console.log('Adicionado o indice',adionadoID);
console.log(pessoas);*/



//3 - B:  adicione uma chava ID em cada objeto: dessa forma ele NÃO  altera o original
const adionadoID = pessoas.map((valor,indice)=>{
    newvalor = {...valor}
    newvalor.id = indice
    return newvalor;
})
console.log('Adicionado o indice',adionadoID);
console.log('NÃO ALTERA O ORIGINAL',pessoas);




