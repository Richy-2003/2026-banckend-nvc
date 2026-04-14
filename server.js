const express = require("express")

const app = express()

function callbackDaRaiz( request, reponse ){
    reponse.send("ola mundo!!!!")
}

app.get("/", callbackDaRaiz)

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})