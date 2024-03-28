const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const usuarioSchema = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const ModeloUsuario = mongoose.model('usuarios', usuarioSchema);

module.exports = router;

// agregar usuario
router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });

    nuevoUsuario.save()
    .then(data => {
        res.json('Usuario agregado');
    })
    .catch(err => {
        res.json(err);
    });
});

// obtener usuarios
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});