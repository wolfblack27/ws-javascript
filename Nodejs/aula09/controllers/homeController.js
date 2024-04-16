exports.paginaInical=(req,res)=>{
    res.send(`
    <form action='/postTeste' method='POST'>
    Nome do Cliente: <input type ='text' name='nome'>
    <button>Enviar</button>
    </form>

`)

}

exports.postTeste=(req,res)=>{
res.send('Fui chamada');

}