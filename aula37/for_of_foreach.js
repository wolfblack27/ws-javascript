const nomes = ['Thiago', "Marisa"]

//Obtem somente o valor
for(let valor of nomes){
console.log(valor)

}

//Obtem o valor, indice e array ()

nomes.forEach(function(valor,indice,array){

    console.log(valor,indice, array)
});
