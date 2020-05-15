'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port = 3900;

mongoose.set('useFindAndModify', false); //Forzar a desactivar los metodos antiguos
mongoose.set( 'useUnifiedTopology' , true ); //
mongoose.Promise = global.Promise; //Habilitar la posibilidad de utilizar promesas
//mongoose.connect(url, opciones)
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser : true})
    .then(() => {
        console.log('La conexión a la base de datos se ha realizado correctamente !!');
        
        //Crear servidor y ponermea escuchar peticiones http
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port)
        });
    });
