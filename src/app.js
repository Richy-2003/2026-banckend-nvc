const express = require("express")

const userController = require("./controllers/userController")

const app = express()

function callbackDaRaiz( request, reponse ){
    reponse.send("ola mundo!!!!")
}

app.get("/", callbackDaRaiz)

app.get("/users", userController.getAllUsers)

module.exports = app