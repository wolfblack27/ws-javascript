
// Filter retorna somente verdadeiro e falso para a condição da função, 'não modifica valores'
//filter ela tambem passa os parametros (valor,indice, array)

/*
//Filtrando maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//Primeira forma
const maiorDez = [];
for(numero of numeros){

    if(numero>=10){
        maiorDez.push(numero)
    }

}
console.log('Primeira opção',maiorDez.sort());

//Segunda opção : retorna o novo array sem alterar o original
const numerosFiltrados = numeros.filter((valor,indice)=>
                                                        {
                                                            console.log('cada interação',valor,indice)
                                                            return valor>10;
                                                        }
                                        );
console.log('Segunda opção',numerosFiltrados.sort());
*/








/*
Exemplos de filtros aplicado aos objetos:
1 - retorne as pessoas que tem nome com 5 letras
2 - retorne as pessoas com mais de 50
3 - retorne as pessoas cujo nome termina com 'a'
* */
/*
const pessoas = [
                    {nome:'Thiago',idade:62},
                    {nome:'Junior',idade:23},
                    {nome:'David',idade:55},
                    {nome:'Nina',idade:19},
                    {nome:'Marisa',idade:32},
                    {nome:'Fernanda',idade:47},

                ]


//1: pessoas que tem nome com 5 letras
const pessoasComNomeGrande = pessoas.filter((valor)=>{
    return valor.nome.length>5
});
console.log('mais de 5 letras',pessoasComNomeGrande);


//2:  retorne as pessoas com mais de 50
const pessoasMaiores = pessoas.filter((valor)=>{
    return valor.idade >50;
});
console.log('maiores que 50',pessoasMaiores);


//3:retorne as pessoas cujo nome termina com 'a'
const pessoasTerminadasA = pessoas.filter((valor)=>{
    return valor.nome.toLowerCase().endsWith('a');
});
console.log('terminadas com A',pessoasTerminadasA);

*/



//Comparando array objetos
const pessoas = [ 
    { nome: 'Joao', num: 1     },
    { nome: 'Maria', num: 2     },
    { nome: 'Fulano', num: 3    }
    ];


//Podemos passar como funcao da sort (que tem dois parametros)
//pessoas.sort(compare)
function compare(a,b) {
  if (a.nome < b.nome)
     return -1;
  if (a.nome > b.nome)
    return 1;
  return 0;
}


pessoas.sort((a,b)=>{
    return a.nome<b.nome?-1: a.nome>b.nome?1:0
});
console.log(pessoas)


