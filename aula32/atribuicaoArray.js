/*A Atribução por desestruturação permite criar variavel
     a partir  de um array
Com o (...) ele obtem o resto do array
Com (,,) pulamos o indice
*/



const numeros = [10,20,30,40,50]; //Cria o Array
const [indice0,indice1,...resto] = numeros; // Atribui as variaveis
console.log(indice0,indice1);
console.log(resto);





