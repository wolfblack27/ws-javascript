const numeros = [1,2,3,4,5,6,7,8,9]

for(let numero of numeros){
    
    if(numero==2){
        console.log("Pulei o 2")
        continue;
    }

    if(numero ==5){
        console.log('Parei no 5')
        break;
    }
    console.log(`Numero listado: ${numero}`)

}

// exemplo 2 maior numero

/*const numeros=[1,20,150,56,45,87,102,12]
let maior = 0

for (let numero of numeros){
    
    if(maior<numero){
        maior=numero
       
    }

}

console.log(`Maior: ${maior}`)*/