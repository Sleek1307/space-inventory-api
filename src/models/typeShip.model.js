const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esta es el esquema de los tipos de nave
const schema = new Schema({
    nameType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('typeShip', schema);