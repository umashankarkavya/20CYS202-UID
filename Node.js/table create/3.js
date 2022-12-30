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
  var sql = " CREATE TABLE visitor_pass(visitor_id int(3),timing int(20),occasion varchar(20),purpose varchar(2));  ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})