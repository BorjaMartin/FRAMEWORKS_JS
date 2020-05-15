'use strict'

//Cargar módulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

//Eejecutar express (http)
var app = express();

//Cargar ficheros rutas
var article_routes = require('./routes/article');


//MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Convertir cualquier tipo de petición a json


//CORS (Acceso cruzado entre dominios)
//Permite llamada htp o peticiones ajax a la API desde cualquier front end (Angular, React, Vue)
// Configurar cabeceras y cors Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Permitir a cualquier cliente realizar peticiones a nuestra API
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Añadir prefijos a rutas / Cargar rutas
app.use('/api',article_routes);

//Exportar modulo (fichero actual)
module.exports = app;