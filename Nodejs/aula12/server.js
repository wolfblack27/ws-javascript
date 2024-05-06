const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');


app.use( 
    express.urlencoded(
        {
            extended:true
        }
    )
);
app.use(express.static(path.resolve(__dirname,'public'))); //Conteudo estatico
app.use(routes); //Rotas
app.set('views',path.resolve(__dirname,'src','views'));//Views
app.set('view engine','ejs');//engine para renderizar views



//Inicia o servidor
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000');
})

