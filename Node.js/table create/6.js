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
  var sql = " CREATE TABLE enterandexit(entry_time int(5),message varchar(20),time_spent int(5)); ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})