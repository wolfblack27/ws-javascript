const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


route.get('/',homeController.paginaInical);
route.get('/contato',contatoController.paginaInical);


module.exports=route; //exporta toda route criada