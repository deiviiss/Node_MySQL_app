/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

const controller = {};


// Funciones-métodos del objeto

//consulta a database
controller.list = (req, res) => {

  req.getConnection((err, conn) => { // conexión
    conn.query('SELECT * FROM clientes', (err, rows_clientes) => { // show clients

      if (err) {
        res.json(err);
      }
      console.log(rows_clientes)
      res.render('views', {
        data: rows_clientes
      });
    });

  });
};

// agregar
controller.save = (req, res) => {
  const data = req.body; // datos que recibe del formulario

  req.getConnection((err, conn) => { // conexión
    conn.query('INSERT INTO clientes SET ?', [data], (err, rows_clientes) => { // agrega cliente
      // console.log(rows_clientes);
      res.redirect('/');
    });
  });
};

//borrar
controller.delete = (req, res) => {
  const { id } = req.params; // id = req.params.id //Recibe la propiedad (id) del objeto

  req.getConnection((err, conn) => { // conexión
    conn.query('DELETE FROM clientes WHERE id = ?', [id], (err, rows_clientes) => { // borra el cliente
      res.redirect('/');
    });
  });
};

//editar
controller.edit = (req, res) => {
  const { id } = req.params; //recibe la propiedad (id) del objeto

  req.getConnection((err, conn) => { // conexion
    conn.query('SELECT * FROM clientes WHERE id = ?', [id], (err, rows_clientes) => { // edita el cliente
      res.render('views_edit', {
        data: rows_clientes[0] // rellena el formulario mediante la propiedad value del formulario
      });
    });
  });
};

// actualizar 
controller.update = (req, res) => {
  const { id } = req.params; // recibe la propiedad (id) del objeto
  const updateCliente = req.body; // datos que recibe del formulario

  req.getConnection((err, conn) => { // conexion
    conn.query('UPDATE clientes set ? WHERE id = ?', [updateCliente, id], (err, rows_clientes) => {
      res.redirect('/')
    })
  })
}

module.exports = controller;