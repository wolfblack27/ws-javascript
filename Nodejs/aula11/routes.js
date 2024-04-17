const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

route.get('/',homeController.paginaInical);
route.get('/contato',contatoController.paginaInical);
route.post('/postTeste',homeController.postTeste);

module.exports=route; //exporta toda route criada