var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hemesh66584",
  database: "gms"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM warden", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
})