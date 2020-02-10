import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const alumnoSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  descripcion: String,
  solucion: String,
  usuarioId: String,
  activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Alumno = mongoose.model('Alumno', alumnoSchema);

export default Alumno;