/* Reduce, serve para reduzir o tamanho do array com algumas operação
    (operações matematicas)
    Apesar de não usual podemos usar o metodo filter, e map
*/



const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];




//Somando com metodo reduce
const total = numeros.reduce((acumulador,valor,indice,array)=>{
    return acumulador+=valor;
})
console.log(total);




//Retornando um array com pares (Pode usar o filter para isso)
const pares = numeros.reduce((acumulador,valor,indice,array)=>{
    if(valor%2==0) acumulador.push(valor);
    return acumulador
},[])
console.log(pares);




//Retornando um array com impares (Pode usar o filter para isso)
const impares = numeros.reduce((acumulador,valor,indice,array)=>{
    if(valor%2!==0) acumulador.push(valor);
    return acumulador
},[])
console.log(impares);




//Retornando o dobro dos valores (Podemos usar o MAP)
const dobraValores = numeros.reduce((acumulador,valor,indice,array)=>{
    acumulador.push(valor*2);
    return acumulador
},[])
console.log(dobraValores);



//Retornando pessoa mais velha
const pessoas = [
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Leticia',idade:10},
    {nome:'Rosana',idade:64},
    {nome:'Wallace',idade:63},

];

const maisVelha = pessoas.reduce((acumulador,valor)=>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);