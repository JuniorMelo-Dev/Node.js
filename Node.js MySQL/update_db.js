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
      var sql = "UPDATE customers SET address = 'Rua João Paulo II, 173' WHERE address = 'Rua Hotolência, 150'";
      con.query(sql, function (err, result) {
            if (err)throw err;
            console.log(result.affectedRows + " record(s) updated");
      });
});