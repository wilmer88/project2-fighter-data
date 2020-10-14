var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
const fighter = require("../models/fighter.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    
//   fighter.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
});

router.post("/api/config", function(req, res) {
  fighter.create(["name"], [req.body.name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/config/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  fighter.update(
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;