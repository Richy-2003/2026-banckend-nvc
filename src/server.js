const express = require("express")

const app = express()

function callbackDaRaiz( request, reponse ){
    reponse.send("ola mundo!!!!")
}

function callbackListaUsuarios(request, response) {
    const listaUsuarios = [
         {    id: 1,
            name: "Richy"
         }
    ]

    response.json(listaUsuarios)  
}
app.get("/", callbackDaRaiz)

app.get("/users", callbackListaUsuarios)

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})