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



  esparaAi('texto',rand(1,3)).then((resposta)=>{
    return resposta
  }).then((resposta)=>{
    console.log(resposta)
  })
  