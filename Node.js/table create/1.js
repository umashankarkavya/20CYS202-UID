
});var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hemesh66584",
  database: "gms"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = " CREATE TABLE studentprofile(change_password varchar(3),view_student varchar(10),updateprofile varchar(20),pass_status int(30));  ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})