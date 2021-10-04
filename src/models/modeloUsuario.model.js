const { model, Schema } = require("mongoose")

const usuarioSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    estado: { type: Boolean, default: true }
})

module.exports = model("usuario", usuarioSchema)