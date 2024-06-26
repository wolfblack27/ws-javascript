const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const usuario = require('./src/controllers/usuario')

route.get('/',homeController.paginaInical);
route.get('/contato',contatoController.paginaInical);
route.post('/postTeste',homeController.postTeste);
route.get('/usuarios',usuario.info);

module.exports=route; //exporta toda route criada