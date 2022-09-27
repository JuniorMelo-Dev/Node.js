// Criando tabela Clientes e Primary Key

var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});

//Conexão com banco para criar tabela.
// con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");

//       var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//       con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("Table created!");
//       });
// });

// Criando PK_id para Tabela
con.connect(function(err) {
      if (err) throw err;
      console.log("Connected");
      var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
      con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table altered");
      });
});