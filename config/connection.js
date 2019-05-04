var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "dnvbdbde3q2o4vha",
  password: "qp1vhl0ann5wyzyp",
  database: "zhzlax37pwn81yud"
});




connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  }); 

module.exports = connection;