//conexion a la base de datos
require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

module.exports = mongoose;