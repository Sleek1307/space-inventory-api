const mongoose =  require('mongoose')
//Esta sección conecta el programa con la base de datos
const connected = async () => {
    try {
        await mongoose.connect('mongodb+srv://Julian13:sleek1307@julian13.deb2e.mongodb.net/space-inventory?retryWrites=true&w=majority')
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connected;