const mongoose = require("mongoose")

const Schema = mongoose.Schema

const EstudianteSchema = new Schema({
  nombre:{
    type: String,
    require: true,
    maxLength:100
  },
  materias: [String],
  asistencia: [String],
  tareas: [String]
})

module.exports = mongoose.model("Estudiante",EstudianteSchema)