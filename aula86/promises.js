function rand(min, max) {
  min *= 100;
  max *= 100;
  return Math.floor(Math.random() * (max - min) + min);
}

function esparaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !=="string") reject('Dado Invalido')
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

function esperadois(msg){
    return new Promise((resolve,reject)=>{
        resolve(msg);
    }); 

}

esparaAi('Acesso a API',rand(1,5))
    .then( (resposta)=>{
        console.log(`resposta do resolve: ${resposta}`)
        return esparaAi('Buscando dados da API',rand(1,10));
    } ).then((resposta)=>{
        console.log(`resposta do resolve: ${resposta}`)
       return esperadois('espera dois');
    
    }).then((resposta)=>{
        console.log(resposta)
    }).catch(error=>{
        console.log(error)
    })


console.log('Esta instrução ocorre antes do Promise');