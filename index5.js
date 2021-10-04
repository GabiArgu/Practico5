const express = require("express");
const app = express();
const morgan = require("morgan")
require("./conection")

//middlewares
//Sirve para que nuestro codigo interprete formato json
app.use(express.json())
    //Notifica a servidor sobre peticiones 
app.use(morgan("dev"))
    //Ayuda en la parte de formularios
app.use(express.urlencoded({ extended: false }))

//Rutes
app.use("/api", require("./src/routes/usuarios.routes"))
app.use("/login", require("./src/routes/loging.routes"))
    //Settings
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Escuchado peticion express en el port: ', port)
})