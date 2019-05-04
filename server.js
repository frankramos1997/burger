var express = require("express");
var exphbs = require("express-handlebars");

var router = require("./controllers/burgers_controller")


var app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));  

app.use(router);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
