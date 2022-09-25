var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});

//Conexão e inserção de 1 linha
// con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//       con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//       });
// });

//Conexão e inserção de multiplas linhas
// con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       var sql = "INSERT INTO customers (name, address) VALUES ?";
//       var values = [
//             ['Junior', 'Rua dos Bandeirantes, 881'],
//             ['Marcos', 'Av. Eusébio de queiroz, 100'],
//             ['Elias', 'Av. Eusébio de Queiroz, 4487'],
//             ['Fabio', 'Rua Dr. Raimundo Guimarães, S/N'],
//             ['Claudio', 'Rua Dr. Evandro Studart, 214'],
//             ['Evandro', 'Rua Julieta quesado, 8'],
//             ['Joábio', 'Rua Hortolencia, 150'],
//             ['Deassis', 'Av. Santos Dumont, S/N'],
//             ['Felipe', 'Rua 210, 453'],
//             ['Happy Children', 'Av. Torres de Melo, S/N']
//       ];
//       con.query(sql, [values], function (err, result) {
//             if (err) throw err;
//             console.log("Number of records inserted: " + result.affectedRows);
//       });
// });

con.connect(function(err) {
      if (err) throw err;
      var sql = "INSERT INTO customers (name, address) VALUES ('Luana', 'Rua dos Bandeirantes, 881')";
      con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted, ID: " + result.insertId);
      });
});
