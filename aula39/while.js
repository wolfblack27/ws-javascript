/*
Laço de repetição While:
Neste exemplo vamos gerar  um numero aleatorio
entre 1 e 50.
usamos o while para continuar até encontrar o valor 10
*/


//Função normal
/* aleatorio = function (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
} */


// Função Arrow
aleatorio= (min,max)=>{
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);

}
    


let rand = aleatorio(1, 50);


/*while (rand !== 10) {
    console.log(`${rand}`)
    rand = aleatorio(1, 50)
}*/

do{

    rand = aleatorio(1, 50)
    console.log(`${rand}`)
    
}while(rand!==10)


