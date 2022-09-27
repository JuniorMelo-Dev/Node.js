var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});

// Selecione o(s) registro(s) com 'endereço(address)' "Rua dos Bandeirantes, 881":
// con.connect(function(err) {
//       if(err) throw err;
//       con.query("SELECT * FROM customers WHERE address = 'Rua dos Bandeirantes, 881'", function (err, result) {
//             if (err) throw err;
//             console.log(result);
//       });
// });

// Selecione o(s) registro(s) com 'endereço(address)' começa com a letra 'R':
// con.connect(function(err) {
//       if(err) throw err;
//       con.query("SELECT * FROM customers WHERE address LIKE 'R%'", function (err, result) {
//             if (err) throw err;
//             console.log(result);
//       });
// });

// Escape de valores de consulta usando o "mysql.escape()" método:
// var adr = 'Av. Eusébio de queiroz, 100';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
// });

// Escape de valores de consulta usando o método '?' de espaço reservado:
// var adr = 'Av. Eusébio de Queiroz, 4487';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//       if (err) throw err;
//       console.log(result);
// });

// Vários marcadores de Posição:
var name = 'Junior';
var adr = 'Av. Eusébio de Queiroz, 4487';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
      if (err) throw err;
      console.log(result);
});
