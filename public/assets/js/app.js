(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBihXpN_FkNdD4KMIWGXilE8oQtoAw7LKs",
        authDomain: "movie-matcher.firebaseapp.com",
        databaseURL: "https://movie-matcher.firebaseio.com",
        projectId: "movie-matcher",
        storageBucket: "movie-matcher.appspot.com",
        messagingSenderId: "1023455338980"
    };
    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));

    });

    btnSignUp.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));

    });

    //        btnLogout.addEventListener('click', e => {
    //            firebase.auth().signOut();
    //        });

    //        firebase.auth().onAuthStateChanged(firebaseUser => {
    //            if (firebaseUser) {
    //                console.log(firebaseUser);
    //                btnLogout.classList.remove('hide');
    //            } else {
    //                console.log("Not Logged In");
    //                btnLogout.classList.add('hide');
    //            }
    //        });

}());

$(document).ready(function () {

    var today = moment().format('YYYY-MM-DD');
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=3d866c05691ba06f9fa697f8e8c9e838&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=" + today;
    var imgIDs = [$('#img1'), $('#img2'), $('#img3'), $('#img4'), $('#img5'), $('#img6'), $('#img7'), $('#img8'), $('#img9'), $('#img10')];

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var movies = response.results;
        for (i = 0; i < 10; i++) {
            imgIDs[i].attr("src", "https://image.tmdb.org/t/p/w640" + movies[i].poster_path);
        };

    });

});

var user = firebase.auth().currentUser;
var uid, email;

if (user !== null) {
    email = user.email;
    uid = user.uid;
}

$(document).ready(function () {

    //function for inserting DB rows into HTML

    function loadUsers(table) {

        var $users = $('#usersTable');

        for (i = 0; i < table.length; i++) { //loop through JSON with db data and append to $('#users-container')

            $users.append(

                "<tr><td>" + table[i].email + "</td>" +
                "<td>" + table[i].topGenre + "</td>" +
                "<td>" + table[i].secondGenre + "</td>" +
                "<td>" + "FIREBASE ID" + "</td>"
            );
        }
    }

    //populate all users from DB with get request
    $.get("/api/users", function (data) {

        console.log(data);

        loadUsers(data);

    });

    //populate genre selections
    var queryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=3d866c05691ba06f9fa697f8e8c9e838&language=en-US";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var genres = response.genres;
        for (i = 0; i < genres.length; i++) {

            $('select').append(

                "<option value='" + genres[i].id + "'>" + genres[i].name + "</option>"
            );
        };
    });

    //create new user

    $('#submit').click(function () {

        event.preventDefault();

        var $email = $('.new-email'); //email field
        var genreOne = $('#genreOne').val();
        var genreTwo = $('#genreTwo').val();

        var newUser = {
            email: $email.val().trim(),
            topGenre: genreOne,
            secondGenre: genreTwo
        };

        $.post("/api/add", newUser)
            .done(function () {
                $email.val("");
                $('#user-pass').val("");
                location.reload();
            });

    });

});
