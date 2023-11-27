const nomes = ['Thiago',"Marisa"];

//Obtem somente o index, ou seja a chave
for (let index in nomes){
    console.log(index);
}
//Obtemos a chave e passamos como indice para obter o valor
for (let index in nomes){
    console.log(nomes[index]);

}


console.log("####  Iteiranado em objetos  ####")


const pessoa = {

    nome:"Thiago",
    idade:36
};

for(let index in pessoa){
console.log(pessoa[index])
}