// forEach, somente intera sobre os valores, sem retornar nada

const a1 = [1000,20,30,500,40,50,60,100,70,80,90];


let maior1=0
a1.forEach((valor,indice,array)=>{

    if(valor>maior1){
        maior1=valor;
    } 

})
console.log('Este é maior: ',maior1)




//usando um for normal para descobrir o maior
let maior=0;

for(let numero of a1){
    if(numero>maior){
        maior=numero;
    } 
    console.log(maior,numero); 
}
console.log('Este é o maior: ',maior)