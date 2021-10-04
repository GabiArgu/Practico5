const jwt = require("jsonwebtoken")
const { editarUsuarios } = require("../controllers/usuarios.controllers")
const Usuario = require("../models/modeloUsuario.model")

require("dotenv").config

const validarToken = async(req, res, next) => {
    const token = req.headers.token

    if (!token) {
        return res.status(400).json("Token invalido")
    }
    try {
        const { id } = await jwt.verify(token, process.env.FIRMA)
        const datosUsuario = await Usuario.findOne({ _id: id, estado: true })

        if (datosUsuario) {
            return res.status(400).json("Token invalido")
        }
        req.usuarioRole = datosUsuario.role

        next()
    } catch (error) {
        res.status(400).json("Token invalido : " + error)
    }


}
module.exports = validarToken