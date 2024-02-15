//Retornando um objeto
/*const pessoa = function(nome,sobrenome,idade){
    return ({nome,sobrenome,idade})
}
const p1 = pessoa('thiago','ventura',36)
console.log(p1)*/

//Retornando Função de Função

//Pratica:

const galinha = function([idade,peso,paraAbate]){

    return `${idade},${peso},${paraAbate}`
}

console.log(galinha([9,1.4,true]))