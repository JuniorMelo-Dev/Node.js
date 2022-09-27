var mysql = require('mysql');

var con = mysql.createConnection({
      host:"localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "db_nodejs_mysql"
});

con.connect(function(err) {
      if (err) throw err;
      var sql = "DELETE FROM customers WHERE address = 'Rua Hortolencia, 150'";
      con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
      });
});