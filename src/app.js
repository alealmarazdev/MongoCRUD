const express = require('express');
const indexRoutes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

// const routes = require('./routes/routes.js');

const app = express();

app.use(bodyParser.json());
app.use (bodyParser.urlencoded({
    extended: true
}));



// app.use((req, resp, next) => {
//     console.log('Servidor escuchando en');
//     next();
// }); 

const db = require ('./config/keys').mongoURI

mongoose.connect(db)
.then(()=> console.log ('Conectado Mongo DB'))
.catch(err=> console.log('Mongo error'))

const PORT =process.env.PORT || 3000

app.listen(PORT, () => (console => (console.log('Servidor escuchando en el puerto 3000'))));
app.use('/', indexRoutes)