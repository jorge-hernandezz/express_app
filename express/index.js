var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<h1>Hola mundo!</h1>');
});

app.listen(3000, function(){
    console.log('Aplication ejemplo, escuchando el puerto 3000!');
});