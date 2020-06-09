const mysql = require("mysql");


let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bc2020",
  database: "burger_db"
});

  // Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM burgers;",function(err,data){
      if (err) {
        console.log(err)
      }
      console.log(data)
    })
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;