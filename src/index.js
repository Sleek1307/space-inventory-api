const express = require('express');
const starShipRoutes = require('./routes/starShip.routes');
const typeShip = require('./routes/typeStar.routes')
const connected = require('./connection');
const cors = require('cors');

const app = express();

//Configuracion de la aplicacion
app.use(cors());
app.use(express.json());

//Define el puerto de la API
const port = 4000;

//Definicion de las rutas
connected();
app.use('/api', starShipRoutes)
app.use('/api', typeShip)

//Inicio del servidor
app.listen(port, () => {
    console.log('Servidor escuchando en el puerto 4000');
})