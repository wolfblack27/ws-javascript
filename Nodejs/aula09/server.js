const express = require('express');
const app = express();
const routes = require('./routes');



app.use(
    
    express.urlencoded(
        {
            extended:true
        }
    )
);
app.use(routes);


//Inicia o servidor
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000');
})

