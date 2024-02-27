const nomes = [ 'Nina', 'joao', 'Marisa', 'Fernanda', 'Carlos' ];
console.log(nomes);
//nomes.splice(indice,delete, element 1, element2, element 3)

//simulando pop
const removido=nomes.splice(3,1,"Ventura") // ele elimina o indice 3 e acrescent 'ventura' no lugar e retorna o indice
console.log(nomes,'Removido',removido);

//simulando shifit
nomes.splice(2,1);//elimina o indice 2
console.log(nomes);

//Simulando o push
nomes.splice(nomes.length,0,'Santos'); //usamos o length para pegar o ultimo indice e adionar logo apos
console.log(nomes)

//simulando o unshift
nomes.splice(0,0,'familia');
console.log(nomes);