const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send('<h1>hell word</h1>')
});

app.get('/contado',(req,res)=>{
    res.send('<h1>obrigado por entrar em contato.Boa tarde</h1>')
});

app.get('/servicos',(req,res)=>{
    
    const servicos=[{servico:'limpeza'},{servico:'manutencao'}]
    const enviarServicos = JSON.stringify(servicos)
    res.send(`<h1>obrigado por entrar em contato.Boa tarde Nossos servicos: <br>${enviarServicos}</h1>`)
});


//Inicia o servidor
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000');
})

