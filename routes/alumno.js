const express = require ('express');
const router = express.Router();

// importar el modelo alumno
const Alumno = require ('../models/alumno');

// Agregar una alumno
router.post('/nuevo-alumno', async(req, res) => {
  const body = req.body;  
  try {
    const alumnoDB = await Alumno.create(body);
    res.status(200).json(alumnoDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos
router.get('/alumnos', async(req, res) => {
    try {
      const alumnoDb = await Alumno.find();
      res.json(alumnoDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Get con parámetros
router.get('/buscar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const alumnoDB = await Alumno.findOne({_id});
    res.json(alumnoDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar un alumno
router.delete('/alumno/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const alumnoDb = await Alumno.findByIdAndDelete({_id});
      if(!alumnoDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(alumnoDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Put actualizar un alumno
router.put('/alumno/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const alumnoDb = await Alumno.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(alumnoDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Exportamos la configuración de express app
module.exports = router;