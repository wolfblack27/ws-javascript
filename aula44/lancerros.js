/*try {
   // const nome = 'thiago';
    console.log(nome);
} catch (error) {
    console.log("Tratando o erro");
    console.log(error);
}
*/

// Lancamento de Erro:

soma = (x,y)=>{

    if(typeof x !== 'number' || typeof y!=='number'){

        throw new ReferenceError('x e y precisam ser numeros');

    }
    return x+y;
}


try {
    console.log(soma(4,'5'));

    
} catch (error) {
    console.log(error)
}
