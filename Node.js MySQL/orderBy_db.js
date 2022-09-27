var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});

// Classifique o resultado em ordem alfabética por nome:
// con.connect(function(err) {
//       if(err) throw err;
//       con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//             if (err) throw err;
//             console.log(result);
//       });
// });

// Classifique o resultado em ordem decrescente, por nome:
con.connect(function(err) {
      if(err) throw err;
      con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
            if (err) throw err;
            console.log(result);
      });
});