var express = require("express");

var router = express.Router();


var burger = require("../models/burger");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
	  {
      devoured: true
    },
	condition, function(result) 
	  {if (result.changedRows === 0) {
        return res.status(404).end();
      }else{
      res.status(200).end();
      }
    });
  });

router.post("/api/burgers", function(req, res) {

console.log( req.body.burger_name, req.body.devoured);

  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
    
  });
});






router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;