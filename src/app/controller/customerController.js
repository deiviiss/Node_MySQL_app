const controller = {};


// Funciones-métodos del objeto

//consulta a database
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM clientes', (err, clientes) => {

      if (err) {
        res.json(err);
      }
      console.log(clientes)
      res.render('views', {
        data: clientes
      });
    });

  });
};

//Recibir formulario
controller.save = (req, res) => {
  console.log(req.body);
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('INSERT INTO clientes set ?', [data], (err, cliente) => {
      console.log(cliente);
      res.redirect('/');
    })
  })
}

module.exports = controller;