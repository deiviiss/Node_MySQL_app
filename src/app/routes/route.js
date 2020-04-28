const express = require('express');
const router = express.Router(); //Modulo de express devuelve un objeto para listar rutas.
const customerController = require('../controller/customerController');


router.get('/', customerController.list);
router.post('/routes', customerController.save);

module.exports = router;



// module.exports = app => {
//   app.get('/', (req, res) => {
//     res.send('Hola mundo')
//   })
// }

