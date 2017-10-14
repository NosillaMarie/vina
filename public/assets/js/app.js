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
    const logEmail = document.getElementById('logEmail');
    const txtPassword = document.getElementById('txtPassword');
    const logPassword = document.getElementById('logPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {

        event.preventDefault();

        const email = logEmail.value;
        const pass = logPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass)

        promise.catch(e => console.log(e.message))
            .then(
                function () {
                    var user = firebase.auth().currentUser;
                    var userRoute = "/current/" + user.uid;
                    window.location.href = userRoute;
            });
    });


    btnSignUp.addEventListener('click', e => {

        event.preventDefault();

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
            
        $('#exampleModal .close').click();

        promise.catch(e => console.log(e.message))
            .then(
                function () {
                    window.location.href = "/survey";
            });
    });


    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.href = "/";
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log("Not Logged In");
            btnLogout.classList.add('hide');
        }
    });

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
        }

    });

});

var user = firebase.auth().currentUser;
var uid, email;

if (user !== null) {
    email = user.email;
    uid = user.uid;
}
    
    $("#sendEmailBtn").on("click", function() {

            event.preventDefault();

            var user = firebase.auth().currentUser;

            var userInfo = {
                email: user.email
            }
              
              $.post("/email", userInfo)
              .done(function() {
                alert('Movies Emailed!')

              });

    });
