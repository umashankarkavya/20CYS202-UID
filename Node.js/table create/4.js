var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hemesh66584",
  database: "gms"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE gatepass(pass_id int(3),timing int(20),occasion varchar(20),pass_type varchar(2)); ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})