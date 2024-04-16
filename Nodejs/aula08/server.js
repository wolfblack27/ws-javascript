const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send(`
                <form action='/postteste' method='POST'>
                Nome do Cliente: <input type ='text' name='nome'>
                <button>Enviar</button>
                </form>
    
    `)
});

app.get('/contado',(req,res)=>{
    res.send('<h1>obrigado por entrar em contato.Boa tarde</h1>')
});

app.get('/servicos',(req,res)=>{
    
    const servicos=[{servico:'limpeza'},{servico:'manutencao'}]
    const enviarServicos = JSON.stringify(servicos)
    res.send(`<h1>obrigado por entrar em contato.Boa tarde Nossos servicos: <br>${enviarServicos}</h1>`)
});

app.get('/testes/:idCliente?/:parametros?',(req,res)=>{
    console.log(req.query) //parametros enviados no corpo
    res.send(`Seu parametro vindo do enredeco: ${req.params.idCliente}.${req.query.idade}`)
})

app.post('/',(req,res)=>{

    res.send('<h1>Obrigado por enviar os dados</h1>')
})


app.use(
    
    express.urlencoded(
        {
            extended:true
        }
    )
);

app.post('/postteste',(req,res)=>{
    console.log(req.body)
    req.
    res.send(`<h1>Obrigado por enviar: ${req.body.nome} </h1>`)
})



//Inicia o servidor
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000');
})

