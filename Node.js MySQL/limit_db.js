var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});

// Selecione os 5 primeiros registros na tabela "clientes(customers)":
// con.connect(function(err) {
//       if (err) throw err;
//       var sql = "SELECT * from customers LIMIT 5";
//       con.query(sql, function (err, result) {
//             if (err)throw err;
//             console.log(result);
//       });
// });

// Comece da posição 3 e retorne os próximos 5 registros da tabela "clientes(customers)":
// con.connect(function(err) {
//       if (err) throw err;
//       var sql = "SELECT * from customers LIMIT 5 OFFSET 2";
//       con.query(sql, function (err, result) {
//             if (err)throw err;
//             console.log(result);
//       });
// });

// Sintaxa enxuta: Comece da posição 3 e retorne os próximos 5 registros da tabela "clientes(customers)":
con.connect(function(err) {
      if (err) throw err;
      var sql = "SELECT * from customers LIMIT 2, 5"; //Abreviação do código
      con.query(sql, function (err, result) {
            if (err)throw err;
            console.log(result);
      });
});