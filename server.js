const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Creación de Middleware (Instrucción o callback)
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'yasar'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

//Solicitud GET
/*app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    let salida = {
        nombre: 'Yasar',
        edad: 22,
        url: req.url
    };

    res.send(salida);
});*/

//app.get('/data', (req, res) => {
//    res.send('Hola Data');
//});

//Puerto utilizado
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});