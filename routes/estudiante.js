const express = require("express")
const controllerEstudiante = require("../controllers/estudiantes")

const router = express.Router()

//Tenemos que construir las rutas del CRUD

router.get("/",controllerEstudiante.getEstudiantes)
router.get("/:id", controllerEstudiante.getEstudiantePorId)
router.post("/", controllerEstudiante.create)
router.put("/:id",controllerEstudiante.upDateEstudiantesPorId)
/*router.patch("/",()=>console.log("editar estudiante"))*/
router.delete("/",()=>console.log("eliminar estudiante"))

module.exports = router