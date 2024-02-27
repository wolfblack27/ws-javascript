/*

const nomes = ['Thiago', 'joao', 'Marisa', 'Fernanda'];
console.log(nomes);

const novoArray = [...nomes]; // cria uma copia sem passar a referencia
novoArray.pop(); // remove a ultiam posicao do array
console.log(novoArray);

delete nomes[0]; // remove o conteudo mas não o indice
console.log(nomes);

nomes.shift(); // remove o primeiro elemento
console.log(nomes);

nomes.push('Carlos'); // adiciona elemento na ultima posicao
console.log(nomes);

nomes.unshift('Nina'); // adiciona na primeira posicao
console.log(nomes);

const novoIntervalo=nomes.slice(1,3) // apenas obtem os elementos no intervalo passado
console.log(novoIntervalo);

const novoIntervalonegativo = nomes.slice(0,-2); // retira no exemplo os dois ultimos elemento
console.log(novoIntervalonegativo);

*/



// Strings / Array
const nomes = 'Thiago Ventura dos Santos';
const nomesString = nomes.split(' '); //Separa com llimitador de espaço
console.log(nomesString);

// Array para string
const nomesArray =  ['Nina', 'joao', 'Marisa', 'Fernanda', 'Carlos' ]
const nomeString = nomesArray.join(',') //Junta com limitador ' ,'
console.log(nomeString)