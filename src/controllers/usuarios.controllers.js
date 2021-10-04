const Usuario = require("../models/modeloUsuario.model")
const bcrypt = require("bcrypt")
const { findByIdAndDelete, findByIdAndUpdate } = require("../models/modeloUsuario.model")


const obtenerUsuarios = async(req, res) => {
    try {
        const todosLosUsuarios = await Usuario.find()
        res.json(todosLosUsuarios)
        res.status(200).json(todosLosUsuarios)
    } catch (error) {
        console.error("Error en controlador de obtener usuarios ", error)
        res.status(500).json(error)
    }
}
const obtenerUsuario = async(req, res) => {
    try {
        const unUsuario = await Usuario.findById(req.params.id)
        res.status(200).json(unUsuario)
    } catch (error) {
        console.error("Error en controlador de obtener usuario ", error)
        res.status(500).json(error)
    }
}
const agregarUsuarios = async(req, res) => {
    try {
        const { email, password } = req.body
        const nuevaPassword = await bcrypt.hash("password", 10)
        const nuevoUsuario = new Usuario({ email, password: nuevaPassword })
        await nuevoUsuario.save()
        res.status(201).json("Usuario creado")
    } catch (error) {
        console.error("Error en controlador de agregar usuarios ", error)
        res.status(401).json(error)
    }
}
const editarUsuarios = async(req, res) => {
    try {
        const { email, password } = req.body
        await Usuario.findByIdAndUpdate(req.param.id, { email, password: nuevaPassword })
        res.status(203).json("Usuario editado")
    } catch (error) {
        console.error("Error en controlador de editar usuarios ", error)
        res.status(403).json(error)
    }
}
const eliminarUsuarios = async(req, res) => {
    try {
        await Usuario.findByIdAndUpdate(req.body.id, { estado: false })
        res.status(203).json("Usuario desactivado correctamente")
    } catch (error) {
        console.error("Error en controlador de eliminar usuarios ", error)
        res.status(403).json(error)
    }
}


module.exports = {
    obtenerUsuario,
    obtenerUsuarios,
    agregarUsuarios,
    editarUsuarios,
    eliminarUsuarios
}