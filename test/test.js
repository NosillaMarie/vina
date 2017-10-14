"use strict";

var Nightmare = require("nightmare");
var expect = require("chai").expect;

var nightmare = Nightmare();

//check to see if this nightmare is doing anything.  
nightmare.goto('https://sheltered-plains-91893.herokuapp.com/')
    .evaluate(() => {
        return document.title;
    })
    .end()
    .then((title) => {
        console.log(title);
    });


describe("Movie Matcher", function () {

    var login = ".dropdown-toggle";

    this.timeout(30000);
    it("should require me to login", function (done) {
        Nightmare({
                show: true,
                waitTimeout: 5000
            })
            .goto("https://sheltered-plains-91893.herokuapp.com/")

            .wait(login)

            .click(login)

            .evaluate(function () {
                return document.title;
            })
            .end()

            .then(function (title) {
                expect(title).to.equal("VINA");
                done();
            })
            .catch(function (err) {
                done(new Error("No Login Form Found!"));
            });
    });

    it("should take you to your movies picks page after login", function (done) {
        Nightmare({
                show: true,
                waitTimeout: 5000
            })
            .goto("https://sheltered-plains-91893.herokuapp.com/")

            .wait(login)

            .click(login)

            .wait("#logEmail")

            .type("#logEmail", "allison@allison.com")

            .type("#logPassword", "allison")

            .click("#btnLogin")

            .evaluate(function () {
                return document.profileHeading;
            })
            .end()
            .then(function (profileHeading) {
                expect(profileHeading).to.equal("Your Movie Matches:");
                done();
            })
            .catch(function (err) {
                done(new Error("Login Not Successful"));
            });
    });
});
