// Map aplicado em objetos

const pessoas =[
    {id:3,nome: 'Luiz'},
    {id:2,nome: 'maria'},
    {id:1,nome: 'Helena'}

]; 

// Desestruturando com for e retirando valores (id,nome)
for (let{id,nome}of pessoas ){

    console.log(id, nome);
}