const { check, validationResult } = require("express-validator")

const validarAgregarUsuario = () => {
    return [
        check("email", "Email invalido")
        .isEmail()
        .normalizeEmail()
        .trim()
        .escape(),
        check("password", "Password invalido")
        .trim()
        .isLength({ min: 5 })

    ]
}
const validarEditarUsuario = () => {
    return [
        check("email", "Email invalido")
        .isEmail()
        .normalizeEmail()
        .trim()
        .escape(),
        check("password", "Password invalido")
        .trim()
        .isLength({ min: 5 })

    ]
}
const validarELiminarUsuario = () => {
    return [
        check["id", "Id Invalido"]
        .isMongoId()
        .trim()
        .escape()
    ]
}
const validarCampos = (req, res, next) => {
    const error = validationResult(req)
    if (error.isEmpty()) {
        res.status(400).json("Parametros invalidos" + error)
        next()
    }
}
module.exports = {
    validarAgregarUsuario,
    validarEditarUsuario,
    validarELiminarUsuario,
    validarCampos
}