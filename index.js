const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
const port = 3005

app.set("port",port)

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log("Conectado a la BD"))
.catch((err)=>console.error(err.message))

app.get("/",(req,res)=>{
    res.send("Probando el servidor")
})

app.listen(port,()=>{
    console.log(`Escuchando el ${port}`)
})