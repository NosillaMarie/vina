var db = require("../models");

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

};
