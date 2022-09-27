var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});


//Conexão e inserção de multiplas linhas
// con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       var sql = "INSERT INTO users (name, favorite_product) VALUES ?";
//       var values = [
//             ['Junior', '154'],
//             ['Marcos', '154'],
//             ['Elias', '155'],
//             ['Fabio', ''],
//             ['Claudio', '']
//       ];
//       con.query(sql, [values], function (err, result) {
//             if (err) throw err;
//             console.log("Number of records inserted: " + result.affectedRows);
//       });
// });

//Conexão e inserção de multiplas linhas
con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO products (id, name) VALUES ?";
      var values = [
            ['154', 'Chocolate Heaven'],
            ['155', 'Tasty Lemons'],
            ['156', 'Vanilla Dreams']
      ];
      con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
      });
});