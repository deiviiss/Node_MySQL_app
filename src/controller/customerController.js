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
  const data = req.body; // datos que recibe del formulario

  req.getConnection((err, conn) => {
    conn.query('INSERT INTO clientes SET ?', [data], (err, rows_clientes) => {
      console.log(rows_clientes);
      res.redirect('/');
    });
  });
};

//borrar cliente
controller.delete = (req, res) => {
  const { id } = req.params; // id = req.params.id //Recibe la propiedad (id_ clientes) del objeto

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM clientes WHERE id = ?', [id], (err, rows_clientes) => {
      res.redirect('/');
    });
  });
};

//editar cliente
controller.edit = (req, res) => {
  const { id } = req.params; //Recibe la propiedad (id) del objeto

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM clientes WHERE id = ?', [id], (err, rows_clientes) => {
      res.render('views_edit', {
        data: rows_clientes
      });
    });
  });
};

module.exports = controller;