function rand(min, max) {
    min *= 100;
    max *= 100;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function esparaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      if(typeof msg !=="string") reject('Dado Invalido')
      setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei pela pomise');
      }, tempo);
    });
  }


const promises = [
                    esparaAi('Promise 1',3000),
                    esparaAi('Promise 2',5000),
                    esparaAi('Promise 3',1000)
                ]
//Recebe varias promessas e resolve na sequencia
/*Promise.all(promises)
.then((resposta)=>{console.log(resposta)})
.catch(error=>{
    console.log(error)
})*/




/*
//Recebe varaias promessas, e retorna conforme vai resolvendo
Promise.race(promises)
.then(resposta=>{
    console.log(resposta)
}).catch(error=>{
    console.log(error)
})*/





//Neste exemplo ja entrgamos a promessa quando resolvida
function baixarPagina(){
    const emCache = true; // se a pagina ja esta carregada podemos devolver a promessa ja resolvida senão chamaremos a esparaAi
    if(emCache){
        return Promise.resolve('Página em cache')
    }
    else{
        return esparaAi('baixei a pagina',3000)
    }

}


baixarPagina().then(resposta=>{
    console.log(resposta)
})
.catch((error)=>{
    console.log(error)
})