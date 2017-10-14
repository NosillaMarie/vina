var db = require("../models");
var moment = require('moment');
var request = require('request');
var nodemailer = require('nodemailer');

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

      //GET route for MYQL id (when new user is created)
       app.get("/new/:id", function (req, res) {
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

      //GET route for FB id (when existing user logs in)
       app.get("/current/:uid", function (req, res) {
           db.Users.findOne({
                   where: {
                       uid: req.params.uid
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

       //POST route for nodemailer
       app.post("/email", function (req, res) {
            var recipient = req.body.email;

            db.Users.findOne({
                   where: {
                       email: recipient
                   }
               })
               .then(function (result) {
    
                   var topGenre = result.topGenre;
                   var today = moment().format('YYYY-MM-DD');
                   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=3d866c05691ba06f9fa697f8e8c9e838&language=en-US&region=US&sort_by=release_date.asc&include_video=false&page=1&primary_release_date.gte=" + today + "&with_genres=" + topGenre;

                   request(queryURL, function (error, response, body) {
                      console.log('error:', error); // Print the error if one occurred
                      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                      var moviesBody = JSON.parse(body);
                      var imgToEmail = " <img src='https://image.tmdb.org/t/p/w640" + moviesBody.results[0].poster_path + "' />";

                      console.log("Nodemailer sending to: " + recipient);

                      var transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                          user: "vinemoviematcher@gmail.com",
                          pass: "gifmoeeoqgfzmmhw"
                        }
                      });

                      var mailOptions = {
                        from: "vinemoviematcher@gmail.com",
                        replyTo: "vinemoviematcher@gmail.com",
                        to: recipient,
                        subject: "Here are the movies you requested with VITA!",
                        text: "'" + moviesBody.results[0].title + "', Release Date: " + moviesBody.results[0].release_date
                      };

                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent');
                        }
                      });

                      console.log("MOVIES EMAILED: " + moviesBody);

                      res.send(true);

                });

               });

            });
};
