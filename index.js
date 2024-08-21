const express = require("express")


const app = express()
const port = 3005

app.set("port",port)

app.get("/",(req,res)=>{
    res.send("Probando el servidor")
})

app.listen(port,()=>{
    console.log(`Escuchando el ${port}`)
})