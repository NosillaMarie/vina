// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});