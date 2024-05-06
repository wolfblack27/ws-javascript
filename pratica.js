
 function fearGreed(limit,formato,filtro){
    return new Promise(async (resolve,reject)=>{
        resposta = await fetch( `https://api.alternative.me/fng/?limit=${limit}&format=${formato}&date_format=us`);
        resposta = await resposta.json()
        resolve(resposta)
    })
}


const filterValues =(resposta,filtro)=>{
    const arrayValues=[]
    for(let valores of resposta.data){
    arrayValues.push(valores.value)
    
}

    return resposta.data.filter((valor)=>{
       return valor.value>filtro
    });
}


fearGreed(20,'JSON').then((resposta)=>{
   return filterValues(resposta,70)
}).then((resposta)=>{
    console.log(resposta)
})

