var db = require("../models");
var moment = require('moment');
var request = require('request')

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });
    app.get("/survey", function (req, res) {
        res.render("survey");
    });
    app.get("/profile", function (req, res) {
        res.render("profile");
    });


    // POST route for new user
    app.post("/api/add", function (req, res) {

        console.log(req.body);

        db.Users.create({
            email: req.body.email,
            topGenre: req.body.topGenre,
            secondGenre: req.body.secondGenre,
            uid: req.body.uid
        }).then(function (results) {
            res.json(results);
        });

    });
       app.get("/:id", function (req, res) {
           db.Users.findOne({
                   where: {
                       id: req.params.id
                   }
               })
               .then(function (result) {
    
                   var topGenre = result.topGenre;
                   var today = moment().format('YYYY-MM-DD');
                   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=3d866c05691ba06f9fa697f8e8c9e838&language=en-US&region=US&sort_by=release_date.asc&include_video=false&page=1&primary_release_date.gte=" + today + "&with_genres=" + topGenre;


                   request(queryURL, function (error, response, body) {
                      console.log('error:', error); // Print the error if one occurred
                      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                      res.render("profile", JSON.parse(body));
                    });
               });
       });
};
