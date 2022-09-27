var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});

// Selecione 'todos os registros' da tabela "clientes" e exiba o objeto de resultado:
// con.connect(function(err) {
//       if(err) throw err;
//       con.query("SELECT * FROM customers", function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//       });
// });

// Selecione o 'nome(name) e o endereço(address)' da tabela "clientes" e exiba o objeto de retorno:
// con.connect(function(err) {
//       if(err) throw err;
//       con.query("SELECT name, address FROM customers", function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//       });
// });


// Retorne o 'endereço(address)' do terceiro registro:
// con.connect(function(err) {
//       if(err) throw err;
//       con.query("SELECT name, address FROM customers", function (err, result, fields) {
//             if (err) throw err;
//             console.log(result[2].address);
//       });
// });

// Selecione todos os registros da tabel "clientes" e exiba o objeto 'campos(fields)':
// con.connect(function(err) {
//       if(err) throw err;
//       con.query("SELECT name, address FROM customers", function (err, result, fields) {
//             if (err) throw err;
//             console.log(fields);
//       });
// });

// Retorne o nome do segundo 'campo(field)':
con.connect(function(err) {
      if(err) throw err;
      con.query("SELECT name, address FROM customers", function (err, result, fields) {
            if (err) throw err;
            console.log(fields[1].name);
      });
});