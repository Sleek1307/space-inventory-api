const express = require('express');
const starShipRoutes = express.Router();
const StarShip = require('../models/starShip.model');
const TypeShip = require('../models/typeShip.model');

//Aca se definen las rutas

//Extrae todas las naves
starShipRoutes.get('/starship', async (req, res) => {
    const result = await StarShip.find().populate('typeStarShip');
    res.json({ result })
})

//Extrae las naves por su Id
starShipRoutes.get('/starship/:id', async (req, res) => {
    const id = req.params.id

    const result = await StarShip.findById(id).populate('typeStarShip');
    res.json({ result })
})

//Extrae las naves por su tipo de nave
starShipRoutes.get('/starship/typeship/:type', async (req, res) => {
    const type = req.params.type;
    const result = await StarShip.find({
        typeStarShip: type,
    }).populate('typeStarShip')

    res.json({ result });
})

//Extrae las naves por sus capacidades
starShipRoutes.get('/starship/ability/:ability', async (req, res) => {
    const ability = req.params.ability;
    const result = await StarShip.find({
        capacidadesDeTipo: ability
    })

    res.json({ result })
})

//Extrae la naves por su nombre(Es importante escribir el nombre tal cual está en la base de datos)
starShipRoutes.get('/starship/name/:name', async (req, res) => {
    const name = req.params.name;
    const result = await StarShip.findOne({
        name: name
    })

    res.json({ result });
})

//Crea una base de datos
starShipRoutes.post('/starship', async (req, res) => {

    const shipData = req.body.starship;
    const typeId = req.body.type;

    const typeShip = await TypeShip.findById(typeId)
    const newStarShip = new StarShip(
        {
            ...shipData,
            typeStarShip: typeShip._id,
        }
    )
    const savedStarShip = await newStarShip.save()

    res.json({ savedStarShip })
})


module.exports = starShipRoutes;