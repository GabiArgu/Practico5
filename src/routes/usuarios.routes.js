const express = require("express")
const router = express.Router()
const {
    obtenerUsuario,
    obtenerUsuarios,
    agregarUsuarios,
    editarUsuarios,
    eliminarUsuarios
} = require("../controllers/usuarios.controllers")

const {
    validarAgregarUsuario,
    validarEditarUsuario,
    validarELiminarUsuario,
    validarCampos
} = require("../middlewares/validarCampUsuarios")
const { validarToken } = require("../middlewares/validarToken")

router.get("/get-users", obtenerUsuarios)
router.get("/get-user/:id", obtenerUsuario)
router.post("/create-user", [validarAgregarUsuario(), validarCampos], agregarUsuarios)
router.put("/edit-user/:id", [validarEditarUsuario(), validarCampos, validarToken], editarUsuarios)
router.delete("/delete-user", [validarELiminarUsuario(), validarCampos, validarToken], eliminarUsuarios)

module.exports = router