const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Este es el esquema de las naves
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    empuje: {
        type: Number,
        required: true
    },
    capacidadesDeNave: {
        type: Array,
        required: true
    },
    capacidadesDeTipo:{
        type: Array,
        required: true
    },
    typeStarShip: [{ type: Schema.Types.ObjectId, ref: 'typeShip' }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('starShip', schema);