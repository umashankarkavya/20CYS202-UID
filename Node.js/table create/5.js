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
  var sql = " CREATE TABLE timeextension(extension_time number(3),reason varchar(20));  ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})