const express = require("express")
const router = express.Router()
const { controLogin } = require("../controllers/login.controllers")

router.post("/", controLogin)
module.exports = router