const numeros = [1,2,3];
console.log(numeros)
const numeros1 = [4,5,6];
console.log(numeros1);
const concatenarNumeros = numeros.concat(numeros1); //concatena
console.log(concatenarNumeros);

//segunda forma
const segundaFormaConcatenacao =  [...numeros,...numeros1,...[7,8,9]];
console.log(segundaFormaConcatenacao);