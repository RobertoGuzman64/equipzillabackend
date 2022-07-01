require('dotenv').config();

const dbconnect = () => {
    const mongoose = require('mongoose');
    const clave = process.env.DB_CLAVE;
    const database = process.env.DB_DATABASE;
    const usuario = process.env.DB_USUARIO;
    const cluster = process.env.DB_CLUSTER;

    const url = `mongodb+srv://${usuario}:${clave}@${cluster}.ajrll.mongodb.net/${database}?retryWrites=true&w=majority`;

    mongoose.connect(url, {
        useNewUrlPArser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Base de datos creada')).catch(error => console.log('A ocurrido algún error al crear la Base de datos', error))
}

module.exports = dbconnect;