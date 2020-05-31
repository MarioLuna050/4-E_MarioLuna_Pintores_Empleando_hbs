// importar paquetes que requerimo

const express = require('express');
const hbs = require('hbs');
const app = express();
// definimos el motor de plantillas
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname+ '/views/partials')

app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/pintor1', (req, res)=>{
    res.render('pintor1');
});
app.get('/pintor2', (req, res)=>{
    res.render('pintor2');

});
app.get('/pintor3', (req, res)=>{
    res.render('pintor3');

});
app.get('/pintor4', (req, res)=>{
    res.render('pintor4');

});
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});