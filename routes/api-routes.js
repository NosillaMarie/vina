var db = require("../models");

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
            firebase_ID: req.body.firebaseID
        }).then(function (results) {
            // `results` here would be the newly created chirp
            res.redirect("/");
        });

    });
    app.get("/api/find", function (req, res) {
        db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (result) {

                var topGenre = result.topGenre;
                var today = moment().format('YYYY-MM-DD');
                var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=3d866c05691ba06f9fa697f8e8c9e838&language=en-US&region=US&sort_by=release_date.asc&include_video=false&page=1&primary_release_date.gte=" + today + "&with_genres=" + topGenre;

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).done(function (response) {

                    res.json(response);

                });
            });
    });
};
