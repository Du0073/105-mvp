const express = require("express")
const controllerEstudiante = require("../controllers/estudiantes")

const router = express.Router()

//Tenemos que construir las rutas del CRUD

router.get("/",controllerEstudiante.getEstudiantes)
router.get("/:id", ()=> console.log("leer estudiante usando id"))
router.post("/", controllerEstudiante.create)//crear estudiante
router.patch("/",()=>console.log("editar estudiante"))
router.delete("/",()=>console.log("eliminar estudiante"))

module.exports = router