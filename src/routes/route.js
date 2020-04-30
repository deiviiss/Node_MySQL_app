const express = require('express');
const router = require('express').Router(); //Modulo de express devuelve un objeto para listar rutas.
const customerController = require('../controller/customerController'); //llama a los controladores.


router.get('/', customerController.list);
router.post('/save', customerController.save);
router.get('/delete/:id', customerController.delete); //Recibe el parámetro de la ruta.
router.get('/edit/:id', customerController.edit); //Recibe el parámetro de la ruta.

module.exports = router;



// module.exports = app => {
//   app.get('/', (req, res) => {
//     res.send('Hola mundo')
//   })
// }

