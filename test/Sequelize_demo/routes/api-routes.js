// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

   // GET route for getting all users
  app.get("/api/users", function(req, res) {

    db.Users.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // POST route for new user
  app.post("/api/add", function(req, res) {

    console.log(req.body);

    db.Users.create({
      email: req.body.email,
      topGenre: req.body.topGenre,
      secondGenre: req.body.secondGenre
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.redirect("/");
    });

  });

};
