const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//función middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Especificamos el motor de plantillas
app.set('view engine', 'pug');

//requerimos el archivos routes donde 
//estan configuradas las rutas
app.use(require('./routes/routes'));

app.listen(4001,()=>{
    console.log('Servere on port 4001');
});