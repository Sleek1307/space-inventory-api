const express = require('express');
const typeRoutes = express.Router();
const TypeShip = require('../models/typeShip.model');

//Obtiene todos los tipos de naves
typeRoutes.get('/types', async (req, res) => {
    const result = await TypeShip.find();

    res.json({ result });
})

module.exports = typeRoutes;