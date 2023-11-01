
function saudacao(frase){

    return `Bom dia ${frase}`
}

//Funcao anonima
const raizAnonima = function(n){

    return n**0.5
};

//Arrow Function1
const raizArrow1 = (n)=>{

    return n**0.5
};

//Arrow Function2
const raizArrow2= n => n ** 0.5



console.log(raizAnonima(9))
console.log(raizArrow1(9))
console.log(raizArrow2(9))
