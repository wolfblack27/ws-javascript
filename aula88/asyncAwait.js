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

//Com o Async e Await podemos encadear nossas promises , afim de esperar pelo resolve de cada uma
//usamos a palavra Async e dentro da função a palavra await
 async function executa(){
    
    try{
        
        const fase1 = await esparaAi('Fase 1',rand(1,3)); // a variavel fase1 guarda o revolve
        console.log(fase1);
        const fase2 = await esparaAi('Fase 2',rand(1,3));// a variavel fase2 guarda o revolve
        console.log(fase2);
        const fase3 = await esparaAi('Fase 3',rand(1,3)); // a variavel fase3 guarda o revolve
        console.log(fase3);

    }catch(error){ // este cath é para capturar caso o reject seja acionado
        console.log(error);
    }
  
}


executa()