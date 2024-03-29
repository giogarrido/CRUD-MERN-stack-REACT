const express = require('express');

const app = express();

// Connect to MongoDB
const archivoBD = require('./conexion');

//Import routes
const usuarioRoute = require('./rutas/usuario');

//Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/usuario', usuarioRoute);

app.get('/', (req, res) => {
    res.end('Hello World');
});



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
