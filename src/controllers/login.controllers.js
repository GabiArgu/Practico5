const Usuarios = require("../models/modeloUsuario.model")
const crearToken = require("../helpers/crearToken")
const bcrypt = require("bcrypt")

const controLogin = async(req, res) => {
    try {
        const { email, password } = req.body
        const usuario = await Usuarios.findOne({ email: email })
        if (!usuario) {
            res.status(400).json("Credencial incorrecta")
        }
        const existeUsuario = await bcrypt.compare(password, usuario.password)
        if (!existeUsuario) {
            res.status(400).json("Credencial incorrecta")
        }
        const token = await crearToken(usuario._id)

        res.status(200).json({ token })
    } catch (error) {
        console.error("Error en el controLogin", error)
        res.status(403).json(error)
    }
}

module.exports = { controLogin }