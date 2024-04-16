const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

route.get('/',homeController.paginaInical);
route.get('/contato',contatoController.paginaInical);
route.post('/postTeste',homeController.postTeste);

module.exports=route; //exporta toda route criada