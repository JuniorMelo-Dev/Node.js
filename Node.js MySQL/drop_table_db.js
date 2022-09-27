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
      var sql = "DROP TABLE IF EXISTS customers";
      con.query(sql, function (err, result) {
            if (err)throw err;
            console.log(result);
      });
});